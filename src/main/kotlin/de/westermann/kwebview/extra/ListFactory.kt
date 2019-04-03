package de.westermann.kwebview.extra

import de.westermann.kobserve.list.ObservableReadOnlyList
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.async

fun <T, V : View> ViewCollection<in V>.listFactory(
        list: ObservableReadOnlyList<T>,
        factory: (T) -> V,
        animateAdd: Int? = null,
        animateRemove: Int? = null
) {
    for (element in list) {
        +factory(element)
    }
    list.onAdd { index ->
        val view = factory(list[index])
        add(index, view)

        if (animateAdd != null) {
            classList += "animate-add"
            view.classList += "active"

            async(animateAdd) {
                classList -= "animate-add"
                view.classList -= "active"
            }
        }
    }
    list.onRemove { index ->
        @Suppress("UNCHECKED_CAST") val view = this[index] as V

        if (animateRemove == null) {
            remove(view)
        } else {
            classList += "animate-remove"
            view.classList += "active"

            async(animateRemove) {
                classList -= "animate-remove"
                view.classList -= "active"
                remove(view)
            }
        }
    }
    list.onUpdate { index ->
        removeAt(index)
        add(index, factory(list[index]))
    }
}
