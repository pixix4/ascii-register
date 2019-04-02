package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLSpanElement

/**
 * Represents a html span element.
 *
 * @author lars
 */
class TextView(
    value: String = ""
) : View(createHtmlView<HTMLSpanElement>()) {

    override val html = super.html as HTMLSpanElement

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
    }
}

@KWebViewDsl
fun ViewCollection<in TextView>.textView(text: String = "", init: TextView.() -> Unit = {}) =
    TextView(text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in TextView>.textView(text: ReadOnlyProperty<String>, init: TextView.() -> Unit = {}) =
    TextView(text.value).also(this::append).also { it.bind(text) }.also(init)
