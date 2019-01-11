package de.ascii.note

import de.ascii.Cash
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView

class NoteBox(
        private val cash: Cash,
        editable: ReadOnlyProperty<Boolean>
) : ViewCollection<View>() {
    init {
        boxView {
            +NoteGroup(100, cash.note100Property, editable)
        }
        boxView {
            +NoteGroup(50, cash.note50Property, editable)
        }
        boxView {
            +NoteGroup(20, cash.note20Property, editable)
        }
        boxView {
            +NoteGroup(10, cash.note10Property, editable)
        }
        boxView {
            +NoteGroup(5, cash.note5Property, editable)
        }
    }
}
