package de.ascii.note

import de.ascii.MoneyGroup
import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kwebview.async
import de.westermann.kwebview.components.InputView
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.inputView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.format

class NoteGroup(
        val value: Int,
        property: Property<Int>,
        editable: ReadOnlyProperty<Boolean>
) : MoneyGroup(property, editable, Note.MAX_ANGLE * 2) {

    override lateinit var input: InputView

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
            input = inputView {
                maxLength = 3

                bind(stringProperty)

                editable.onChange {
                    readonly = !editable.value
                }
                readonly = !editable.value

                var focused = false

                onFocus {
                    if (!focused) {
                        focused = true
                        async {
                            selectRange(0, value.length)
                        }
                    }
                }
                onBlur {
                    focused = false
                }

                onKeyDown(this@NoteGroup::onKeyDown)
            }
            inputView {
                readonly = true
                preventTabStop()

                bind(property.mapBinding {
                    (it * this@NoteGroup.value.toDouble()).format(2) + " €"
                })
            }
        }
    }
}