package de.ascii.note

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.imageView
import de.westermann.kwebview.createHtmlView
import kotlin.math.pow
import kotlin.math.sqrt
import kotlin.random.Random

class Note(
        val value: Int,
        position: Int
) : ViewCollection<View>(createHtmlView()) {
    init {
        val image = imageView("/public/images/note$value.jpg")


        val angle = (2.0 * MAX_ANGLE + 1) * 1.2.pow(-position)

        image.html.style.transform = "rotate(${-angle + MAX_ANGLE}deg)"
        image.html.style.boxShadow = "0 1px 4px rgba(0, 0, 0, ${angle / (2 * MAX_ANGLE + 1)})"
    }

    companion object {
        const val MAX_ANGLE = 20
    }
}