package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLTableSectionElement

class TableSection(val type: Type) : ViewCollection<TableRow>(createHtmlView<HTMLTableSectionElement>(type.tagName)) {
    override val html = super.html as HTMLTableSectionElement

    enum class Type(val tagName: String) {
        THEAD("thead"),
        TBODY("tbody"),
        TFOOT("tfoot")
    }
}

@KWebViewDsl
fun ViewCollection<in TableSection>.thead(init: TableSection.() -> Unit = {}): TableSection {
    val view = TableSection(TableSection.Type.THEAD)
    append(view)
    init(view)
    return view
}

@KWebViewDsl
fun ViewCollection<in TableSection>.tbody(init: TableSection.() -> Unit = {}): TableSection {
    val view = TableSection(TableSection.Type.TBODY)
    append(view)
    init(view)
    return view
}

@KWebViewDsl
fun ViewCollection<in TableSection>.tfoot(init: TableSection.() -> Unit = {}): TableSection {
    val view = TableSection(TableSection.Type.TFOOT)
    append(view)
    init(view)
    return view
}
