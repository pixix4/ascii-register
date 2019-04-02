package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.ValidationProperty
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.not
import de.westermann.kwebview.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent

class InputView(
        type: InputType,
        initValue: String = ""
) : ViewForLabel() {

    fun bind(property: ReadOnlyProperty<String>) {
        valueProperty.bind(property)
        readonly = true
    }

    fun bind(property: Property<String>) {
        valueProperty.bindBidirectional(property)
    }

    fun bind(property: ValidationProperty<String>) {
        valueProperty.bindBidirectional(property)
        invalidProperty.bind(!property.validProperty)
    }

    fun unbind() {
        valueProperty.unbind()
        if (invalidProperty.isBound) {
            invalidProperty.unbind()
        }
    }

    var value: String
        get() = html.value
        set(value) {
            html.value = value
            valueProperty.invalidate()
        }

    val valueProperty: Property<String> = property(this::value)

    var placeholder: String
        get() = html.placeholder
        set(value) {
            html.placeholder = value
            placeholderProperty.invalidate()
        }

    val placeholderProperty: Property<String> = property(this::placeholder)

    val invalidProperty by ClassDelegate("invalid")
    var invalid by invalidProperty

    private var typeInternal by AttributeDelegate("type")
    var type: InputType?
        get() = typeInternal?.let(InputType.Companion::find)
        set(value) {
            typeInternal = value?.html
        }
    private var maxLengthInternal by AttributeDelegate("maxLength")
    var maxLength: Int?
        get() = maxLengthInternal?.toIntOrNull()
        set(value) {
            maxLengthInternal = value?.toString()
        }
    private var minInternal by AttributeDelegate("min")
    var min: Double?
        get() = minInternal?.toDoubleOrNull()
        set(value) {
            minInternal = value?.toString()
        }
    private var maxInternal by AttributeDelegate("max")
    var max: Double?
        get() = maxInternal?.toDoubleOrNull()
        set(value) {
            maxInternal = value?.toString()
        }
    private var stepInternal by AttributeDelegate("step")
    var step: Double?
        get() = stepInternal?.toDoubleOrNull()
        set(value) {
            stepInternal = value?.toString()
        }

    init {
        value = initValue
        this.type = type

        var lastValue = value
        val changeListener = object : EventListener {
            override fun handleEvent(event: Event) {
                val value = value
                if (value != valueProperty.value || value != lastValue) {
                    lastValue = value
                    valueProperty.value = value
                }

                (event as? KeyboardEvent)?.let { e ->
                    when (e.keyCode) {
                        13, 27 -> blur()
                    }
                }
            }
        }

        html.addEventListener("change", changeListener)
        html.addEventListener("keyup", changeListener)
        html.addEventListener("keypress", changeListener)
    }
}

enum class InputType(val html: String) {
    TEXT("text"),
    NUMBER("number"),
    PASSWORD("password");

    companion object {
        fun find(html: String): InputType? = values().find { it.html == html }
    }
}

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(text: String = "", init: InputView.() -> Unit = {}) =
        InputView(InputType.TEXT, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(text: ReadOnlyProperty<String>, init: InputView.() -> Unit = {}) =
        InputView(InputType.TEXT, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(text: Property<String>, init: InputView.() -> Unit = {}) =
        InputView(InputType.TEXT, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(text: ValidationProperty<String>, init: InputView.() -> Unit = {}) =
        InputView(InputType.TEXT, text.value).also(this::append).also { it.bind(text) }.also(init)


@KWebViewDsl
fun ViewCollection<in InputView>.inputView(type: InputType = InputType.TEXT, text: String = "", init: InputView.() -> Unit = {}) =
        InputView(type, text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(type: InputType = InputType.TEXT, text: ReadOnlyProperty<String>, init: InputView.() -> Unit = {}) =
        InputView(type, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(type: InputType = InputType.TEXT, text: Property<String>, init: InputView.() -> Unit = {}) =
        InputView(type, text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in InputView>.inputView(type: InputType = InputType.TEXT, text: ValidationProperty<String>, init: InputView.() -> Unit = {}) =
        InputView(type, text.value).also(this::append).also { it.bind(text) }.also(init)
