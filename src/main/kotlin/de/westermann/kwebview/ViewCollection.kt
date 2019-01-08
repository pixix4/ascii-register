package de.westermann.kwebview

import org.w3c.dom.HTMLElement
import kotlin.dom.clear

/**
 * @author lars
 */
abstract class ViewCollection<V : View>(view: HTMLElement) : View(view), Iterable<V> {

    protected val children: MutableList<V> = mutableListOf()

    fun append(view: V) {
        children += view
        html.appendChild(view.html)
    }

    operator fun plusAssign(view: V) = append(view)

    fun prepand(view: V) {
        children.add(0, view)
        html.insertBefore(view.html, html.firstChild)
    }

    fun remove(view: V) {
        if (children.contains(view)) {
            children -= view
            html.removeChild(view.html)
        }
    }

    fun toForeground(view: V) {
        if (view in children && children.indexOf(view) < children.size - 1) {
            remove(view)
            append(view)
        }
    }

    fun toBackground(view: V) {
        if (view in children && children.indexOf(view) > 0) {
            remove(view)
            prepand(view)
        }
    }

    fun first(): V = children.first()
    fun last(): V = children.last()

    operator fun minusAssign(view: V) = remove(view)

    val isEmpty: Boolean
        get() = children.isEmpty()

    fun clear() {
        children.clear()
        html.clear()
    }

    override fun iterator(): Iterator<V> = children.iterator()

    val size: Int
        get() = children.size

    operator fun contains(view: V) = children.contains(view)

    operator fun V.unaryPlus() {
        append(this)
    }
}
