package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLSpanElement
import kotlin.dom.clear

/**
 * Represents all kinds of icon views.
 *
 * @author lars
 */
class IconView(icon: Icon?) : View(createHtmlView<HTMLSpanElement>()) {

    override val html = super.html as HTMLSpanElement

    fun bind(property: ReadOnlyProperty<Icon?>) {
        iconProperty.bind(property)
    }

    fun unbind() {
        iconProperty.unbind()
    }

    var icon: Icon? = null
        set(value) {
            field = value
            html.clear()
            value?.let {
                html.appendChild(it.element)
            }
            iconProperty.invalidate()
        }

    val iconProperty: Property<Icon?> = property(this::icon)

    init {
        this.icon = icon
    }
}

@KWebViewDsl
fun ViewCollection<in IconView>.iconView(icon: Icon? = null, init: IconView.() -> Unit = {}) =
        IconView(icon).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in IconView>.iconView(icon: ReadOnlyProperty<Icon?>, init: IconView.() -> Unit = {}) =
        IconView(icon.value).also(this::append).also { it.bind(icon) }.also(init)
