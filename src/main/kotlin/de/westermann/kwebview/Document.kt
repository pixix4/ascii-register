package de.westermann.kwebview

import de.westermann.kobserve.EventHandler
import org.w3c.dom.events.FocusEvent
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import org.w3c.dom.events.WheelEvent
import kotlin.browser.document

object Document {

    val onClick = EventHandler<MouseEvent>()
    val onDblClick = EventHandler<MouseEvent>()
    val onContext = EventHandler<MouseEvent>()

    val onMouseDown = EventHandler<MouseEvent>()
    val onMouseMove = EventHandler<MouseEvent>()
    val onMouseUp = EventHandler<MouseEvent>()
    val onMouseEnter = EventHandler<MouseEvent>()
    val onMouseLeave = EventHandler<MouseEvent>()

    val onWheel = EventHandler<WheelEvent>()

    val onKeyDown = EventHandler<KeyboardEvent>()
    val onKeyPress = EventHandler<KeyboardEvent>()
    val onKeyUp = EventHandler<KeyboardEvent>()

    val onFocus = EventHandler<FocusEvent>()
    val onBlur = EventHandler<FocusEvent>()

    init {
        onClick.bind(document, "click")
        onDblClick.bind(document, "dblclick")
        onContext.bind(document, "contextmenu")

        onMouseDown.bind(document, "mousedown")
        onMouseMove.bind(document, "mousemove")
        onMouseUp.bind(document, "mouseup")
        onMouseEnter.bind(document, "mouseenter")
        onMouseLeave.bind(document, "mouseleave")

        onWheel.bind(document, "wheel")

        onKeyDown.bind(document, "keydown")
        onKeyPress.bind(document, "keypress")
        onKeyUp.bind(document, "keyup")

        onFocus.bind(document, "focus")
        onBlur.bind(document, "blur")
    }
}
