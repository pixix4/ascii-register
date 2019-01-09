package de.ascii.note

import de.westermann.kobserve.Property
import de.westermann.kobserve.basic.FunctionAccessor
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.*
import de.westermann.kwebview.createHtmlView
import de.westermann.kwebview.format

class NoteGroup(
        val value: Int,
        val property: Property<Int>
) : ViewCollection<View>(createHtmlView()) {

    private val stringProperty = property(object : FunctionAccessor<String> {
        override fun set(value: String): Boolean {
            val number = value.toIntOrNull() ?: 0
            property.value = kotlin.math.max(number, 0)
            if (number < 0) {
                property.onChange.emit(Unit)
            }
            return true
        }

        override fun get(): String {
            return property.value.toString()
        }
    }, property)

    init {
        textView("$value EURO") {
            onMouseDown {
                it.stopPropagation()
            }
        }

        +NoteStack(value, property)

        boxView {
            classList += "note-input"
            inputView {
                this.type = InputType.NUMBER
                min = 0.0

                bind(stringProperty)

                onKeyPress {
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
            inputView {
                readonly = true
                preventTabStop()

                bind(property.mapBinding {
                    (it * this@NoteGroup.value.toDouble()).format(2)
                })
            }
        }
    }
}