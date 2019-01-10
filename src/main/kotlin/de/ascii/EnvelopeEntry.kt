package de.ascii

import de.westermann.kobserve.Property
import de.westermann.kobserve.basic.FunctionAccessor
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.minus
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.InputType
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.inputView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.createHtmlView
import de.westermann.kwebview.format

class EnvelopeEntry(
        label: String,
        val value: Double,
        val property: Property<Int>,
        previousProperty: Property<Int>
) : ViewCollection<View>(createHtmlView()) {

    private val difference = previousProperty - property

    init {
        textView(label)

        boxView {
            inputView {
                readonly = true
                preventTabStop()

                bind(difference.mapBinding { it.toString() })

            }
            inputView {
                readonly = true
                preventTabStop()

                bind(difference.mapBinding {
                    (it * this@EnvelopeEntry.value).format(2) + " €"
                })
            }
        }
    }
}