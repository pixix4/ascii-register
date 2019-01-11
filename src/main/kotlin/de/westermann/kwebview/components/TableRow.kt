package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLTableRowElement

class TableRow() : ViewCollection<TableCell>(createHtmlView<HTMLTableRowElement>("tr")) {
    override val html = super.html as HTMLTableRowElement
}

@KWebViewDsl
fun ViewCollection<in TableRow>.row(vararg classes: String, init: TableRow.() -> Unit = {}): TableRow {
    val view = TableRow()
    for (c in classes) {
        view.classList += c
    }
    append(view)
    init(view)
    return view
}
