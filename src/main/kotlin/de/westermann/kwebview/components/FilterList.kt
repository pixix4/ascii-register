package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView

class FilterList<T, V : View>(
        val property: ReadOnlyProperty<T>,
        val filter: Filter<T, V>
) : ViewCollection<V>(createHtmlView()) {

    private val content: MutableMap<T, V> = mutableMapOf()

    fun update() {
        val list = filter.filter(property.value)
        var missing = list

        for ((element, view) in content.entries) {
            if (element in list) {
                missing -= element
            } else {
                if (contains(view)) {
                    remove(view)
                }
                if (!filter.useCache) {
                    content -= element
                }
            }
        }

        for (element in missing) {
            val view = filter.render(element)
            append(view)
            if (property is Property<T>) {
                view.onClick {
                    property.value = element
                }
            }
            content[element] = view
        }

        clear()

        for (element in list) {
            append(content[element]!!)
        }
    }

    init {
        update()

        property.onChange {
            update()
        }
    }
}

interface Filter<T, V : View> {
    fun filter(partial: T): List<T>
    fun render(element: T): V

    val useCache: Boolean
}

class StringFilter(
        private val dataSet: List<String>
) : Filter<String, TextView> {
    override fun filter(partial: String): List<String> {
        val lower = partial.trim().toLowerCase()
        return dataSet.filter {
            it.toLowerCase().contains(lower)
        }.sortedBy { it.length + it.toLowerCase().indexOf(partial) * 2 }
    }

    override fun render(element: String) = TextView(element)

    override val useCache = true
}

class StaticStringFilter(
        private val dataSet: List<String>
) : Filter<String, TextView> {
    override fun filter(partial: String) = dataSet

    override fun render(element: String) = TextView(element)

    override val useCache = true
}


class DynamicStringFilter(
        private val filter: (partial: String) -> List<String>
) : Filter<String, TextView> {
    override fun filter(partial: String) = filter.invoke(partial)

    override fun render(element: String) = TextView(element)

    override val useCache = false
}


fun <T, V : View> ViewCollection<in FilterList<T, V>>.filterList(property: ReadOnlyProperty<T>, filter: Filter<T, V>, init: FilterList<T, V>.() -> Unit = {}) =
        FilterList(property, filter).also(this::append).also(init)