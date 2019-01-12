package de.westermann.kwebview

import de.westermann.kobserve.ListenerReference
import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import org.w3c.dom.DOMStringMap
import org.w3c.dom.get
import org.w3c.dom.set

/**
 * Represents the css classes of an html element.
 *
 * @author lars
 */
class DataSet(
        private val map: DOMStringMap
) {

    private val bound: MutableMap<String, Bound> = mutableMapOf()

    /**
     * Add css class.
     */
    operator fun plusAssign(entry: Pair<String, String>) {
        if (entry.first in bound) {
            val p = bound[entry.first] ?: return
            if (p.property is Property<String?>) {
                p.property.value = entry.second
            } else {
                throw IllegalStateException("The given class is bound and cannot be modified manually!")
            }
        } else {
            map[entry.first] = entry.second
        }
    }

    /**
     * Remove css class.
     */
    operator fun minusAssign(key: String) {
        if (key in bound) {
            val p = bound[key] ?: return
            if (p.property is Property<String?>) {
                p.property.value = null
            } else {
                throw IllegalStateException("The given class is bound and cannot be modified manually!")
            }
        } else {
            delete(map, key)
        }
    }

    /**
     * Check if css class exits.
     */
    operator fun get(key: String): String? = map[key]

    /**
     * Set css class present.
     */
    operator fun set(key: String, value: String?) =
            if (value == null) {
                this -= key
            } else {
                this += key to value
            }

    fun bind(key: String, property: ReadOnlyProperty<String?>) {
        if (key in bound) {
            throw IllegalArgumentException("Class is already bound!")
        }

        set(key, property.value)
        bound[key] = Bound(property,
                property.onChange.reference {
                    val value = property.value
                    if (value == null) {
                        delete(map, key)
                    } else {
                        map[key] = value
                    }
                }
        )
    }

    fun unbind(key: String) {
        if (key !in bound) {
            throw IllegalArgumentException("Class is not bound!")
        }

        bound[key]?.reference?.remove()
        bound -= key
    }

    private data class Bound(
            val property: ReadOnlyProperty<String?>,
            val reference: ListenerReference<Unit>?
    )
}