package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLDivElement

class BoxView(): ViewCollection<View>(createHtmlView<HTMLDivElement>()) {
    override val html = super.html as HTMLDivElement
}

@KWebViewDsl
fun ViewCollection<in BoxView>.boxView(init: BoxView.() -> Unit = {}) =
        BoxView().also(this::append).also(init)
