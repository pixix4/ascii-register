package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLTableElement

class Table() : ViewCollection<View>(createHtmlView<HTMLTableElement>()) {
    override val html = super.html as HTMLTableElement
}

@KWebViewDsl
fun ViewCollection<in Table>.table(vararg classes: String, init: Table.() -> Unit = {}): Table {
    val view = Table()
    for (c in classes) {
        view.classList += c
    }
    append(view)
    init(view)
    return view
}
