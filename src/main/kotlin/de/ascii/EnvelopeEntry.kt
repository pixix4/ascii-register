package de.ascii

import de.westermann.kobserve.Property
import de.westermann.kobserve.property.mapBinding
import de.westermann.kobserve.minus
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.inputView
import de.westermann.kwebview.components.textView

class EnvelopeEntry(
        label: String,
        val value: Double,
        val property: Property<Int>,
        previousProperty: Property<Int>
) : ViewCollection<View>() {

    private val difference = previousProperty - property

    init {
        textView(label)

        textView("✕")

        inputView {
            readonly = true
            preventTabStop()

            bind(difference.mapBinding { it.toString() })

        }


        /*
        inputView {
            readonly = true
            preventTabStop()

            bind(difference.mapBinding {
                (it * this@EnvelopeEntry.value).format(2) + " €"
            })
        }*/
    }
}