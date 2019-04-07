package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.*
import org.w3c.dom.HTMLLabelElement

/**
 * Represents a html label element.
 *
 * @author lars
 */
class Label(
    inputElement: ViewForLabel,
    value: String = ""
) : View(createHtmlView<HTMLLabelElement>()) {

    override val html = super.html as HTMLLabelElement

    fun bind(property: ReadOnlyProperty<String>) {
        textProperty.bind(property)
    }

    fun unbind() {
        textProperty.unbind()
    }

    var text: String
        get() = html.textContent ?: ""
        set(value) {
            html.textContent = value
            textProperty.invalidate()
        }

    val textProperty: Property<String> = property(this::text)

    init {
        text = value

        inputElement.setLabel(this)
    }
}

@KWebViewDsl
fun ViewCollection<in Label>.label(inputElement: ViewForLabel, text: String = "", init: Label.() -> Unit = {}) =
    Label(inputElement, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Label>.label(inputElement: ViewForLabel, text: ReadOnlyProperty<String>, init: Label.() -> Unit = {}) =
    Label(inputElement, text.value).also(this::append).also { it.bind(text) }.also(init)
