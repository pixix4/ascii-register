package de.westermann.kwebview

import de.westermann.kwebview.components.Label
import org.w3c.dom.HTMLInputElement
import kotlin.math.abs
import kotlin.random.Random

abstract class ViewForLabel : View(createHtmlView<HTMLInputElement>()) {
    override val html = super.html as HTMLInputElement

    private var label: Label? = null

    fun setLabel(label: Label) {
        if (this.label != null) {
            throw IllegalStateException("Label already set!")
        }

        this.label = label

        val id = id
        if (id?.isNotBlank() == true) {
            label.html.htmlFor = id
        } else {
            val newId = this::class.simpleName?.toDashCase() + "-" + generateId()
            this.id = newId
            label.html.htmlFor = newId
        }
    }

    private var requiredInternal by AttributeDelegate("required")
    var required: Boolean
        get() = requiredInternal != null
        set(value) {
            requiredInternal = if (value) "required" else null
        }
    private var readonlyInternal by AttributeDelegate("readonly")
    var readonly: Boolean
        get() = readonlyInternal != null
        set(value) {
            readonlyInternal = if (value) "readonly" else null
        }

    var tabindex by AttributeDelegate()
    fun preventTabStop() {
        tabindex = "-1"
    }

    companion object {
        fun generateId(length: Int = 16): String {
            var str = ""
            while (str.length <= length) {
                str += abs(Random.nextLong()).toString(36)
            }
            return str.take(length)
        }
    }
}
