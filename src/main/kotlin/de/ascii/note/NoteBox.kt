package de.ascii.note

import de.ascii.Cash
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLDivElement

class NoteBox(
        private val cash: Cash
) : ViewCollection<View>(createHtmlView<HTMLDivElement>()) {
}