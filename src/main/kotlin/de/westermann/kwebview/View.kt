package de.westermann.kwebview

import de.westermann.kobserve.EventHandler
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import org.w3c.dom.events.FocusEvent
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import org.w3c.dom.events.WheelEvent

abstract class View(view: HTMLElement = createHtmlView()) {

    open val html: HTMLElement = view.also { view ->
        this::class.simpleName?.let { name ->
            view.classList.add(name.toDashCase())
        }
    }

    val classList = ClassList(view.classList)
    val dataset = DataSet(view.dataset)

    var id by AttributeDelegate()

    val clientLeft: Int
        get() = html.clientLeft
    val clientTop: Int
        get() = html.clientTop
    val clientWidth: Int
        get() = html.clientWidth
    val clientHeight: Int
        get() = html.clientHeight

    val offsetLeft: Int
        get() = html.offsetLeft
    val offsetTop: Int
        get() = html.offsetTop
    val offsetWidth: Int
        get() = html.offsetWidth
    val offsetHeight: Int
        get() = html.offsetHeight

    val offsetLeftTotal: Int
        get() {
            var element: HTMLElement? = html
            var offset = 0
            while (element != null) {
                offset += element.offsetLeft
                element = element.offsetParent as? HTMLElement
            }
            return offset
        }
    val offsetTopTotal: Int
        get() {
            var element: HTMLElement? = html
            var offset = 0
            while (element != null) {
                offset += element.offsetTop
                element = element.offsetParent as? HTMLElement
            }
            return offset
        }

    val dimension: Dimension
        get() = html.getBoundingClientRect().toDimension()

    var title by AttributeDelegate()

    val style = view.style
    fun style(block: CSSStyleDeclaration.() -> Unit) {
        block(style)
    }

    fun focus() {
        html.focus()
    }

    fun blur() {
        html.blur()
    }

    fun click() {
        html.click()
    }

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
        onClick.bind(view, "click")
        onDblClick.bind(view, "dblclick")
        onContext.bind(view, "contextmenu")

        onMouseDown.bind(view, "mousedown")
        onMouseMove.bind(view, "mousemove")
        onMouseUp.bind(view, "mouseup")
        onMouseEnter.bind(view, "mouseenter")
        onMouseLeave.bind(view, "mouseleave")

        onWheel.bind(view, "wheel")

        onKeyDown.bind(view, "keydown")
        onKeyPress.bind(view, "keypress")
        onKeyUp.bind(view, "keyup")

        onFocus.bind(view, "focus")
        onBlur.bind(view, "blur")
    }
}
