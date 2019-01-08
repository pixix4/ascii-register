package de.ascii

import de.westermann.kobserve.ListenerReference
import de.westermann.kobserve.Property
import de.westermann.kobserve.basic.FunctionAccessor
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.*
import de.westermann.kwebview.createHtmlView
import de.westermann.kwebview.format
import org.w3c.dom.events.MouseEvent

class CoinGroup(
        name: String,
        stackCount: Int,
        private val value: Int,
        val property: Property<Int>
) : ViewCollection<View>(createHtmlView()) {

    private val stringProperty = property(object : FunctionAccessor<String> {
        override fun set(value: String): Boolean {
            property.value = value.toIntOrNull() ?: 0
            return true
        }

        override fun get(): String {
            return property.value.toString()
        }
    }, property)

    init {
        textView(name) {
            onMouseDown {
                it.stopPropagation()
            }
        }

        val coins = mutableMapOf<Int, Coin>()
        val type = "coin$value"

        property.onChange {
            for (c in coins.values) {
                c.classList["active"] = c.dataset["position"]!!.toInt() < property.value
            }
        }

        val stack = CoinStackGroup(stackCount, type, value / 100.0)
        +stack

        for (s in stack) {
            for (c in s) {
                val position = c.dataset["position"]!!.toInt()
                coins[position] = c
                c.classList["active"] = position < property.value
            }
        }

        val references = mutableListOf<ListenerReference<*>>()

        val mousemove = lambda@{ event: MouseEvent ->
            if (event.type == "mouseup" || event.buttons == 0.toShort()) {
                references.forEach { it.remove() }
                references.clear()
            }

            val mouse = event.clientY
            if (coins[0]!!.offsetTopTotal + coins[0]!!.clientHeight < mouse) {
                property.value = 0
                return@lambda
            }

            for ((_, coin) in coins.entries.sortedBy { it.key }) {
                val top = coin.offsetTopTotal

                if (top < mouse) {
                    property.value = coin.dataset["position"]!!.toInt() + 1
                    return@lambda
                }
            }

            property.value = coins.entries.maxBy { it.key }!!.value.dataset["position"]!!.toInt() + 1
        }

        onMouseDown {
            mousemove(it)

            Body.onMouseMove.reference(mousemove)?.let(references::add)
            Body.onMouseUp.reference(mousemove)?.let(references::add)
        }
        onWheel {
            if (it.deltaY > 0) {
                property.value -= 1
            } else if (it.deltaY < 0) {
                property.value += 1
            }
        }

        boxView {
            onMouseDown {
                it.stopPropagation()
            }

            classList += "coin-input"

            inputView {
                this.type = InputType.NUMBER
                min = 0.0

                bind(stringProperty)
            }
            inputView {
                this.type = InputType.NUMBER
                min = 0.0
                step = 0.01
                readonly = true

                bind(property.mapBinding {
                    (it * (this@CoinGroup.value / 100.0)).format(2)
                })
            }
        }
    }
}
