package de.westermann.kwebview

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

    /**
     * Add css class.
     */
    operator fun plusAssign(entry: Pair<String, String>) {
        map.set(entry.first, entry.second)
    }

    /**
     * Remove css class.
     */
    operator fun minusAssign(key: String) {
        delete(map, key)
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
                map[key] = value
            }
}