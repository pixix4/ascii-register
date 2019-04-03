package de.westermann.kwebview

import org.w3c.dom.HTMLElement
import kotlin.dom.clear

/**
 * @author lars
 */
abstract class ViewCollection<V : View>(view: HTMLElement = createHtmlView()) : View(view), Collection<V> {

    private val children: MutableList<V> = mutableListOf()

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

    fun replace(oldView: V, newView: V) {
        if (children.contains(oldView)) {
            children.add(children.indexOf(oldView), newView)
            html.insertBefore(newView.html, oldView.html)
            children -= oldView
            html.removeChild(oldView.html)
        }
    }

    fun add(view: V) = append(view)

    fun add(index: Int, view: V) {
        if (index >= size) {
            append(view)
        } else {
            html.insertBefore(view.html, children[index].html)
            children.add(index, view)
        }
    }

    operator fun get(index: Int): V {
        return children[index]
    }

    fun removeAt(index: Int) {
        if (index in 0 until size) {
            remove(children[index])
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

    override fun isEmpty(): Boolean = children.isEmpty()

    fun clear() {
        children.clear()
        html.clear()
    }

    override fun iterator(): Iterator<V> = children.iterator()

    override val size: Int
        get() = children.size

    override fun contains(element: V) = children.contains(element)

    override fun containsAll(elements: Collection<V>): Boolean = children.containsAll(elements)

    operator fun V.unaryPlus() {
        append(this)
    }
}
