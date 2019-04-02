package de.ascii.note

import de.ascii.coin.CoinGroup
import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.basic.FunctionAccessor
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.InputType
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.inputView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.format
import kotlin.math.absoluteValue
import kotlin.math.roundToInt
import kotlin.math.sign
import kotlin.math.sqrt

class NoteGroup(
        val value: Int,
        val property: Property<Int>,
        editable: ReadOnlyProperty<Boolean>
) : ViewCollection<View>() {

    private val stringProperty = property(object : FunctionAccessor<String> {
        override fun set(value: String): Boolean {
            if (editable.value) {
                val number = value.toIntOrNull() ?: 0
                property.value = kotlin.math.max(number, 0)
                if (number < 0) {
                    property.onChange.emit(Unit)
                }
            }
            return true
        }

        override fun get(): String {
            return property.value.toString()
        }
    }, property)

    private var wheelCounter: Int = 0
    private var wheelUpwards: Boolean? = null

    init {
        textView("$value EURO") {
            onMouseDown {
                it.stopPropagation()
            }
        }

        +NoteStack(value, property)

        boxView {
            classList += "note-button"
            textView("+") {
                onClick {
                    if (editable.value) {
                        property.value += 1
                    }
                }
            }
            textView("-") {
                onClick {
                    if (editable.value && property.value > 0) {
                        property.value -= 1
                    }
                }
            }

            style {
                editable.onChange {
                    display = if (editable.value) "block" else "none"
                }
                display = if (editable.value) "block" else "none"
            }
        }

        boxView {
            classList += "note-input"
            inputView {
                type = InputType.NUMBER
                min = 0.0
                max = 200.0
                maxLength = 3

                bind(stringProperty)

                editable.onChange {
                    readonly = !editable.value
                }
                readonly = !editable.value

                onKeyPress {
                    if (editable.value) {
                        when (it.keyCode) {
                            33 -> {
                                property.value = ((property.value / 5) + 1) * 5
                            }
                            34 -> {
                                if (property.value > 0) {
                                    if (property.value % 5 == 0) {
                                        property.value = ((property.value / 5) - 1) * 5
                                    } else {
                                        property.value = ((property.value / 5)) * 5
                                    }
                                }
                            }
                        }
                    }
                }
            }
            inputView {
                readonly = true
                preventTabStop()

                bind(property.mapBinding {
                    (it * this@NoteGroup.value.toDouble()).format(2) + " €"
                })
            }
        }


        onWheel {
            if (editable.value) {
                if (it.deltaY > 0 && wheelUpwards != false) {
                    wheelUpwards = false
                    wheelCounter = 0
                } else if (it.deltaY < 0 && wheelUpwards != true) {
                    wheelUpwards = true
                    wheelCounter = 0
                }

                wheelCounter += sqrt(it.deltaY.absoluteValue).roundToInt()
                val toAdd = -it.deltaY.sign.toInt() * (wheelCounter / CoinGroup.WHEEL_THRESHOLD)
                wheelCounter %= CoinGroup.WHEEL_THRESHOLD
                property.value = kotlin.math.min(kotlin.math.max(0, property.value + toAdd), Note.MAX_ANGLE * 2)
            }

            it.preventDefault()
            it.stopPropagation()
        }
    }
}