package de.ascii.note

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.imageView
import kotlin.math.pow

class Note(
        val value: Int,
        position: Int
) : ViewCollection<View>() {
    init {
        imageView("images/note$value.png") {
            style {
                val angle = (2.0 * MAX_ANGLE + 1) * 1.2.pow(-position)
                transform = "rotate(${-angle + MAX_ANGLE}deg)"
                boxShadow = "0 1px 4px rgba(0, 0, 0, ${angle / (2 * MAX_ANGLE + 1)})"
            }

            onMouseDown {
                it.preventDefault()
            }
        }
    }

    companion object {
        const val MAX_ANGLE = 20
    }
}