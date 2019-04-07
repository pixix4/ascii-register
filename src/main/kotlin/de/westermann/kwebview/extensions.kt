package de.westermann.kwebview

import de.westermann.kobserve.event.EventHandler
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import org.w3c.dom.DOMRect
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.*
import kotlin.browser.document
import kotlin.browser.window

inline fun <reified V : HTMLElement> createHtmlView(tag: String? = null): V {
    var tagName: String
    if (tag != null) {
        tagName = tag
    } else {
        tagName = V::class.js.name.toLowerCase().replace("html([a-z]*)element".toRegex(), "$1")
        if (tagName.isBlank()) {
            tagName = "div"
        }
    }
    return document.createElement(tagName) as V
}

fun String.toDashCase() = replace("([a-z])([A-Z])".toRegex(), "$1-$2").toLowerCase()

inline fun <reified T> EventHandler<T>.bind(element: EventTarget, event: String) {
    val listener = object : EventListener {
        override fun handleEvent(event: Event) {
            this@bind.emit(event as T)
        }
    }
    var isAttached = false

    val updateState = {
        if (isEmpty() && isAttached) {
            element.removeEventListener(event, listener)
            isAttached = false
        } else if (!isEmpty() && !isAttached) {
            element.addEventListener(event, listener)
            isAttached = true
        }
    }

    onAttach = updateState
    onDetach = updateState
    updateState()
}

fun MouseEvent.toPoint(): Point = Point(clientX, clientY)
fun DOMRect.toDimension(): Dimension = Dimension(x, y, width, height)

fun Number.format(digits: Int): String = this.asDynamic().toFixed(digits)

external fun delete(p: dynamic): Boolean = definedExternally

fun delete(thing: dynamic, key: String) {
    delete(thing[key])
}

/**
 * Apply current dom changes and recalculate all sizes. Executes the given block afterwards.
 *
 * @param timeout Optionally set a timeout for this call. Defaults to 1.
 * @param block Callback
 */
fun async(timeout: Int = 1, block: () -> Unit) {
    if (timeout < 1) throw IllegalArgumentException("Timeout must be greater than 0!")
    window.setTimeout(block, timeout)
}

fun interval(timeout: Int, block: () -> Unit): Int {
    if (timeout < 1) throw IllegalArgumentException("Timeout must be greater than 0!")
    return window.setInterval(block, timeout)
}

fun clearInterval(id: Int) {
    window.clearInterval(id)
}

fun <V : View> ViewCollection<V>.bindView(vararg properties: ReadOnlyProperty<*>, block: () -> V): ReadOnlyProperty<V> {
    val viewProperty = property(block())
    var view by viewProperty
    +view

    fun change() {
        val new = block()
        if (new != view) {
            replace(view, new)
            view = new
        }
    }
    for (p in properties) {
        p.onChange { change() }
    }

    return viewProperty
}

val KeyboardEvent.modifierKey: Boolean
    get() = altKey || ctrlKey || shiftKey