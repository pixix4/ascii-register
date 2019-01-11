package de.westermann.kwebview.components

import de.westermann.kwebview.*
import org.w3c.dom.HTMLTableCellElement

class TableCell(val isHead: Boolean) :
        ViewCollection<View>(createHtmlView<HTMLTableCellElement>(if (isHead) "th" else "td")) {
    override val html = super.html as HTMLTableCellElement

    private var colSpanInternal by AttributeDelegate("colspan")
    var colSpan: Int?
        get() = colSpanInternal?.toIntOrNull()
        set(value) {
            colSpanInternal = value?.toString()
        }

    private var rowSpanInternal by AttributeDelegate("rowspan")
    var rowSpan: Int?
        get() = rowSpanInternal?.toIntOrNull()
        set(value) {
            rowSpanInternal = value?.toString()
        }
}

@KWebViewDsl
fun ViewCollection<in TableCell>.cell(colSpan: Int? = null, init: TableCell.() -> Unit = {}): TableCell {
    val view = TableCell(false)
    view.colSpan = colSpan
    append(view)
    init(view)
    return view
}

@KWebViewDsl
fun ViewCollection<in TableCell>.head(colSpan: Int? = null, init: TableCell.() -> Unit = {}): TableCell {
    val view = TableCell(true)
    view.colSpan = colSpan
    append(view)
    init(view)
    return view
}
