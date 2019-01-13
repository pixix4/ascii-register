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
            bound[entry.first]?.set(entry.second)
        } else {
            map[entry.first] = entry.second
        }
    }

    /**
     * Remove css class.
     */
    operator fun minusAssign(key: String) {
        if (key in bound) {
            bound[key]?.set(null)
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

    fun bind(key: String, property: ReadOnlyProperty<String>) {
        if (key in bound) {
            throw IllegalArgumentException("Class is already bound!")
        }

        bound[key] = Bound(key, null, property)
    }

    fun bind(key: String, property: ReadOnlyProperty<String?>) {
        if (key in bound) {
            throw IllegalArgumentException("Class is already bound!")
        }

        bound[key] = Bound(key, property, null)
    }

    fun unbind(key: String) {
        if (key !in bound) {
            throw IllegalArgumentException("Class is not bound!")
        }

        bound[key]?.reference?.remove()
        bound -= key
    }

    private inner class Bound(
            val key: String,
            val propertyNullable: ReadOnlyProperty<String?>?,
            val property: ReadOnlyProperty<String>?
    ) {

        var reference: ListenerReference<Unit>? = null

        fun set(value: String?) {
            if (propertyNullable != null && propertyNullable is Property) {
                propertyNullable.value = value
            } else if (property != null && property is Property && value != null) {
                property.value = value
            } else {
                throw IllegalStateException("The given class is bound and cannot be modified manually!")
            }
        }

        init {
            if (propertyNullable != null) {
                reference = propertyNullable.onChange.reference {
                    val value = propertyNullable.value
                    if (value == null) {
                        delete(map, key)
                    } else {
                        map[key] = value
                    }
                }

                val value = propertyNullable.value
                if (value == null) {
                    delete(map, key)
                } else {
                    map[key] = value
                }
            } else if (property != null) {
                reference = property.onChange.reference {
                    map[key] = property.value
                }

                map[key] = property.value
            }

        }
    }
}