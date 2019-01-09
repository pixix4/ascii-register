package de.ascii.note

import de.ascii.Cash
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLDivElement

class NoteBox(
        private val cash: Cash
) : ViewCollection<View>(createHtmlView<HTMLDivElement>()) {
    init {
        boxView {
            +NoteGroup(500, cash.note500Property)
        }
        boxView {
            +NoteGroup(200, cash.note200Property)
        }
        boxView {
            +NoteGroup(100, cash.note100Property)
        }
        boxView {
            +NoteGroup(50, cash.note50Property)
        }
        boxView {
            +NoteGroup(20, cash.note20Property)
        }
        boxView {
            +NoteGroup(10, cash.note10Property)
        }
        boxView {
            +NoteGroup(5, cash.note5Property)
        }
    }
}