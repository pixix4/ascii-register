package de.westermann.kwebview.components

import org.w3c.dom.Element

/**
 * Base interface for all icons.
 *
 * @author lars
 */
interface Icon {
    /**
     * Dom element that represents an icon.
     */
    val element: Element
}