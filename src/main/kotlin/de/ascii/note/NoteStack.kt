package de.ascii.note

import de.westermann.kobserve.Property
import de.westermann.kwebview.ViewCollection

class NoteStack(
        val value: Int,
        val property: Property<Int>
) : ViewCollection<Note>() {

    private fun update() {
        val count = property.value

        while (size - 1 > count) {
            remove(last())
        }

        while (size - 1 < count) {
            append(Note(value, size - 1))
        }
    }

    init {
        +Note(value, 0)
        property.onChange { update() }
        update()
    }
}