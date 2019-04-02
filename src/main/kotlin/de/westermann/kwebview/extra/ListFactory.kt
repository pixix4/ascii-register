package de.westermann.kwebview.extra

import de.westermann.kobserve.list.ObservableReadOnlyList
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection

fun <T, V : View> ViewCollection<in V>.listFactory(
        list: ObservableReadOnlyList<T>,
        factory: (T) -> V
){

    for (element in list) {
        +factory(element)
    }
    list.onAdd { index ->
        add(index, factory(list[index]))
    }
    list.onRemove { index ->
        removeAt(index)
    }
    list.onUpdate { index ->
        removeAt(index)
        add(index, factory(list[index]))
    }
}
