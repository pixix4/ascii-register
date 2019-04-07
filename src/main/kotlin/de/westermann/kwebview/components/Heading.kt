package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLHeadingElement

class Heading(
        val type: Type,
        value: String = ""
) : View(createHtmlView<HTMLHeadingElement>(type.tagName)) {

    override val html = super.html as HTMLHeadingElement

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

    enum class Type(val tagName: String) {
        H1("h1"),
        H2("h2"),
        H3("h3"),
        H4("h4"),
        H5("h5"),
        H6("h6")
    }
}

@KWebViewDsl
fun ViewCollection<in Heading>.h1(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H1, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h1(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H1, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h2(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H2, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h2(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H2, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h3(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H3, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h3(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H3, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h4(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H4, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h4(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H4, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h5(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H5, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h5(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H5, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h6(text: String = "", init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H6, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in Heading>.h6(text: ReadOnlyProperty<String>, init: Heading.() -> Unit = {}) =
        Heading(Heading.Type.H6, text.value).also(this::append).also { it.bind(text) }.also(init)
