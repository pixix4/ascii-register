package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLTableCaptionElement

class TableCaption() : ViewCollection<View>(createHtmlView<HTMLTableCaptionElement>("caption")) {
    override val html = super.html as HTMLTableCaptionElement
}

@KWebViewDsl
fun ViewCollection<in TableCaption>.caption(init: TableCaption.() -> Unit = {}): TableCaption {
    val view = TableCaption()
    append(view)
    init(view)
    return view
}
