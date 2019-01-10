package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLDivElement

class BoxView() : ViewCollection<View>(createHtmlView<HTMLDivElement>()) {
    override val html = super.html as HTMLDivElement
}

@KWebViewDsl
fun ViewCollection<in BoxView>.boxView(vararg classes: String, init: BoxView.() -> Unit = {}): BoxView {
    val view = BoxView()
    for (c in classes) {
        view.classList += c
    }
    append(view)
    init(view)
    return view
}
