package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.ViewForLabel
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

class Checkbox(
        initValue: Boolean = false
) : ViewForLabel() {

    fun bind(property: ReadOnlyProperty<Boolean>) {
        checkedProperty.bind(property)
        readonly = true
    }

    fun bind(property: Property<Boolean>) {
        checkedProperty.bindBidirectional(property)
    }

    fun unbind() {
        checkedProperty.unbind()
    }

    var checked: Boolean
        get() = html.checked
        set(value) {
            html.checked = value
            checkedProperty.invalidate()
        }

    val checkedProperty: Property<Boolean> = property(this::checked)

    init {
        checked = initValue
        html.type = "checkbox"

        var lastValue = checked
        val changeListener = object : EventListener {
            override fun handleEvent(event: Event) {
                val value = checked
                if (value != checkedProperty.value || value != lastValue) {
                    lastValue = value
                    checkedProperty.value = value
                }
            }
        }

        html.addEventListener("change", changeListener)
        html.addEventListener("keyup", changeListener)
        html.addEventListener("keypress", changeListener)
    }
}

@KWebViewDsl
fun ViewCollection<in Checkbox>.checkbox(value: Boolean = false, init: Checkbox.() -> Unit = {}) =
        Checkbox(value).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Checkbox>.checkbox(value: ReadOnlyProperty<Boolean>, init: Checkbox.() -> Unit = {}) =
        Checkbox(value.value).also(this::append).also { it.bind(value) }.also(init)

@KWebViewDsl
fun ViewCollection<in Checkbox>.checkbox(value: Property<Boolean>, init: Checkbox.() -> Unit = {}) =
        Checkbox(value.value).also(this::append).also { it.bind(value) }.also(init)
