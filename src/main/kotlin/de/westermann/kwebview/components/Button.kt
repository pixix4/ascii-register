package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLButtonElement

/**
 * Represents a html span element.
 *
 * @author lars
 */
class Button() : ViewCollection<View>(createHtmlView<HTMLButtonElement>()) {

    constructor(text: String) : this() {
        this.text = text
    }

    override val html = super.html as HTMLButtonElement

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
}

@KWebViewDsl
fun ViewCollection<in Button>.button(text: String = "", init: Button.() -> Unit = {}) =
        Button(text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Button>.button(text: ReadOnlyProperty<String>, init: Button.() -> Unit = {}) =
        Button(text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Button>.button(init: Button.() -> Unit = {}) =
        Button().also(this::append).also(init)
