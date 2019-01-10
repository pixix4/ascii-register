package de.westermann.kwebview.components

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import org.w3c.dom.HTMLBodyElement
import kotlin.browser.document

object Body : ViewCollection<View>(document.body
        ?: throw NullPointerException("Access to body before body was loaded")) {
    override val html = super.html as HTMLBodyElement
}
