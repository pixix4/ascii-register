package de.westermann.kwebview

import kotlin.reflect.KProperty

/**
 * Delegate to easily access html attributes.
 *
 * @author lars
 */
class AttributeDelegate(
        private val paramName: String? = null
) {

    private fun getParamName(property: KProperty<*>): String = paramName ?: property.name.toLowerCase()

    operator fun getValue(container: View, property: KProperty<*>) = container.html.getAttribute(getParamName(property))

    operator fun setValue(container: View, property: KProperty<*>, value: String?) {
        if (value == null) {
            container.html.removeAttribute(getParamName(property))
        } else {
            container.html.setAttribute(getParamName(property), value.toString())
        }
    }
}