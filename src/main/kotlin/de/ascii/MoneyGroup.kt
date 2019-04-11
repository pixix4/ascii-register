package de.ascii

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.event.emit
import de.westermann.kobserve.property.FunctionAccessor
import de.westermann.kobserve.property.property
import de.westermann.kwebview.Document
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.InputView
import de.westermann.kwebview.modifierKey
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.math.absoluteValue
import kotlin.math.roundToInt
import kotlin.math.sign
import kotlin.math.sqrt

abstract class MoneyGroup(
        val property: Property<Int>,
        val editable: ReadOnlyProperty<Boolean>,
        val maximum: Int
) : ViewCollection<View>() {

    protected val stringProperty = property(object : FunctionAccessor<String> {
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
    private var isHovered = false

    abstract val input: InputView

    protected fun onKeyDown(event: KeyboardEvent) {
        val input = (event.target as? HTMLInputElement)?.let {
            if (it == input.html) input else null
        }
        if (editable.value && isHovered && input == null || input == this.input) {
            event.stopPropagation()
            when (event.keyCode) {
                33, 38, 75 -> {
                    if (event.keyCode == 33 || event.modifierKey) {
                        property.value = ((property.value / 5) + 1) * 5
                    } else {
                        property.value += 1
                    }
                    event.preventDefault()
                    return
                }
                34, 40, 74 -> {
                    if (property.value > 0) {
                        if (event.keyCode == 34 || event.modifierKey) {
                            if (property.value % 5 == 0) {
                                property.value = ((property.value / 5) - 1) * 5
                            } else {
                                property.value = ((property.value / 5)) * 5
                            }
                        } else {
                            property.value -= 1
                        }
                    }
                    event.preventDefault()
                    return
                }
            }

            if (input == null) return

            when (event.keyCode) {
                in 48..57 -> {
                    if (input.value.length >= 3) {
                        input.value = input.value.drop(1)
                    }
                }
                8, 9, 46, in 112..123 -> {
                    // Pass through this keys
                }
                72 -> {
                    event.preventDefault()
                    previousView(this)
                }
                37 -> {
                    if (input.selectionStart == 0 && input.selectionStart == input.selectionEnd || event.modifierKey) {
                        previousView(this)
                    } else {
                        val start = input.selectionStart
                        if (start == null || start == 0) {
                            input.selectRange(0)
                        } else {
                            input.selectRange(start -1)
                        }
                    }
                }
                76 -> {
                    event.preventDefault()
                    nextView(this)
                }
                39 -> {
                    if (input.selectionStart == input.value.length && input.selectionStart == input.selectionEnd || event.modifierKey) {
                        nextView(this)
                    } else {
                        val start = input.selectionStart
                        if (start == null || start == input.value.length) {
                            input.selectRange(input.value.length)
                        } else {
                            input.selectRange(start + 1)
                        }
                    }
                }
                13 -> {
                    emit(CalculateEvent)
                }
                else -> {
                    //println("prevent ${event.keyCode}")
                    event.preventDefault()
                }
            }
        }
    }

    init {
        onMouseEnter {
            isHovered = true
        }
        onMouseLeave {
            isHovered = false
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
                val toAdd = -it.deltaY.sign.toInt() * (wheelCounter / WHEEL_THRESHOLD)
                wheelCounter %= WHEEL_THRESHOLD
                property.value = kotlin.math.min(kotlin.math.max(0, property.value + toAdd), maximum)
            }

            it.preventDefault()
            it.stopPropagation()
        }
        Document.onKeyDown(this::onKeyDown)

        MoneyGroup.groups.add(this)
    }

    companion object {
        private val groups = mutableListOf<MoneyGroup>()

        private fun nextView(current: MoneyGroup) {
            val index = groups.indexOf(current)
            if (index < 0) return

            groups[(index + 1) % groups.size].input.focus()
        }

        private fun previousView(current: MoneyGroup) {
            val index = groups.indexOf(current)
            if (index < 0) return

            groups[(groups.size + index - 1) % groups.size].input.focus()
        }

        const val WHEEL_THRESHOLD: Int = 4
    }
}