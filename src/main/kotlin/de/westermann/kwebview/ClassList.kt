package de.westermann.kwebview

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.event.EventListener
import org.w3c.dom.DOMTokenList

/**
 * Represents the css classes of an html element.
 *
 * @author lars
 */
class ClassList(
        private val list: DOMTokenList
) : Iterable<String> {

    private val bound: MutableMap<String, Bound> = mutableMapOf()


    /**
     * Add css class.
     */
    fun add(clazz: String) {
        if (clazz in bound) {
            val p = bound[clazz] ?: return
            if (p.property is Property<Boolean>) {
                p.property.value = true
            } else {
                throw IllegalStateException("The given class is bound and cannot be modified manually!")
            }
        } else {
            list.add(clazz)
        }
    }

    /**
     * Add css class.
     */
    operator fun plusAssign(clazz: String) = add(clazz)

    /**
     * Add css class.
     */
    fun remove(clazz: String) {
        if (clazz in bound) {
            val p = bound[clazz] ?: return
            if (p.property is Property<Boolean>) {
                p.property.value = false
            } else {
                throw IllegalStateException("The given class is bound and cannot be modified manually!")
            }
        } else {
            list.remove(clazz)
        }
    }

    /**
     * Remove css class.
     */
    operator fun minusAssign(clazz: String) = remove(clazz)

    /**
     * Check if css class exits.
     */
    operator fun get(clazz: String): Boolean = list.contains(clazz)

    /**
     * Check if css class exits.
     */
    operator fun contains(clazz: String): Boolean = list.contains(clazz)

    /**
     * Set css class present.
     */
    operator fun set(clazz: String, present: Boolean) =
            if (present) {
                add(clazz)
            } else {
                remove(clazz)
            }

    /**
     * Toggle css class.
     */
    fun toggle(clazz: String, force: Boolean? = null) = set(clazz, force ?: !contains(clazz))

    fun bind(clazz: String, property: ReadOnlyProperty<Boolean>) {
        if (clazz in bound) {
            throw IllegalArgumentException("Class is already bound!")
        }

        set(clazz, property.value)
        bound[clazz] = Bound(property,
                property.onChange.reference {
                    list.toggle(clazz, property.value)
                }
        )
    }

    fun unbind(clazz: String) {
        if (clazz !in bound) {
            throw IllegalArgumentException("Class is not bound!")
        }

        bound[clazz]?.reference?.detach()
        bound -= clazz
    }

    override fun iterator(): Iterator<String> {
        return toString().split(" +".toRegex()).iterator()
    }

    override fun toString(): String = list.value

    private data class Bound(
            val property: ReadOnlyProperty<Boolean>,
            val reference: EventListener<Unit>
    )
}