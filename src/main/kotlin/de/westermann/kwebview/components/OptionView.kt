package de.westermann.kwebview.components

import de.westermann.kwebview.View
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLOptionElement

class OptionView<T>(val value: T) : View(createHtmlView<HTMLOptionElement>()) {

    override val html = super.html as HTMLOptionElement

    var htmlValue: String
        get() = html.value
        set(value) {
            html.value = value
        }

    var text: String
        get() = html.text
        set(value) {
            html.text = value
        }

    val index: Int
        get() = html.index

    var selected: Boolean
        get() = html.selected
        set(value) {
            html.selected = value
        }

}