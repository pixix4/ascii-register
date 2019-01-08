package de.westermann.kwebview

import de.westermann.kobserve.EventHandler
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.*

abstract class View(view: HTMLElement) {

    open val html: HTMLElement = view.also { view ->
        this::class.simpleName?.let { name ->
            view.classList.add(name.toDashCase())
        }
    }

    val classList = ClassList(view.classList)
    val dataset = DataSet(view.dataset)

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

    var title: String? by AttributeDelegate()

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
        view.addEventListener("click", onClick.eventListener())
        view.addEventListener("dblclick", onDblClick.eventListener())
        view.addEventListener("contextmenu", onContext.eventListener())

        view.addEventListener("mousedown", onMouseDown.eventListener())
        view.addEventListener("mousemove", onMouseMove.eventListener())
        view.addEventListener("mouseup", onMouseUp.eventListener())
        view.addEventListener("mouseenter", onMouseEnter.eventListener())
        view.addEventListener("mouseleave", onMouseLeave.eventListener())

        view.addEventListener("wheel", onWheel.eventListener())

        view.addEventListener("keydown", onKeyDown.eventListener())
        view.addEventListener("keypress", onKeyPress.eventListener())
        view.addEventListener("keyup", onKeyUp.eventListener())

        view.addEventListener("focus", onFocus.eventListener())
        view.addEventListener("blur", onBlur.eventListener())
    }
}
