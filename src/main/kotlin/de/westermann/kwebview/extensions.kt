package de.westermann.kwebview

import de.westermann.kobserve.EventHandler
import org.w3c.dom.DOMRect
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document

inline fun <reified V : HTMLElement> createHtmlView(): V {
    var tagName = V::class.js.name.toLowerCase().replace("html([a-z]*)element".toRegex(), "$1")
    if (tagName.isBlank()) {
        tagName = "div"
    }
    return document.createElement(tagName) as V
}

fun String.toDashCase() = replace("([a-z])([A-Z])".toRegex(), "$1-$2").toLowerCase()

inline fun <reified T> EventHandler<T>.eventListener() = object : EventListener {
    override fun handleEvent(event: Event) {
        this@eventListener.emit(event as T)
    }
}

fun MouseEvent.toPoint(): Point = Point(clientX, clientY)
fun DOMRect.toDimension(): Dimension = Dimension(x, y, width, height)

fun Number.format(digits: Int): String = this.asDynamic().toFixed(digits)

external fun delete(p: dynamic): Boolean = definedExternally

fun delete(thing: dynamic, key: String) {
    delete(thing[key])
}