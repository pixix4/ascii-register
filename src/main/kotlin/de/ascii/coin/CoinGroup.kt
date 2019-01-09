package de.ascii.coin

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
import kotlin.math.max

class CoinGroup(
        name: String,
        stackCount: Int,
        private val value: Int,
        val property: Property<Int>
) : ViewCollection<View>(createHtmlView()) {

    private val stringProperty = property(object : FunctionAccessor<String> {
        override fun set(value: String): Boolean {
            val number = value.toIntOrNull() ?: 0
            property.value = max(number, 0)
            if (number < 0) {
                property.onChange.emit(Unit)
            }
            return true
        }

        override fun get(): String {
            return property.value.toString()
        }
    }, property)

    private val maximum = stackCount * 5

    private fun updateCoin(coin: Coin) {
        coin.classList["active"] = coin.position < property.value
        coin.classList["overflow"] = coin.position + maximum < property.value
        coin.classList["dead"] = 2 * maximum < property.value
    }

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
                updateCoin(c)
            }
        }

        val stack = CoinStackGroup(stackCount, type, value / 100.0)
        +stack

        for (s in stack) {
            for (c in s) {
                val position = c.position
                coins[position] = c
                updateCoin(c)
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
                    property.value = coin.position + 1
                    return@lambda
                }
            }

            property.value = coins.entries.maxBy { it.key }!!.value.position + 1
        }

        onMouseDown {
            mousemove(it)

            Body.onMouseMove.reference(mousemove)?.let(references::add)
            Body.onMouseUp.reference(mousemove)?.let(references::add)
        }
        onWheel {
            if (it.deltaY > 0 && property.value > 0) {
                property.value -= 1

                it.preventDefault()
                it.stopPropagation()
            } else if (it.deltaY < 0) {
                property.value += 1

                it.preventDefault()
                it.stopPropagation()
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

                onKeyPress {
                    when (it.keyCode) {
                        33 -> {
                            property.value = ((property.value / 5) + 1) * 5
                        }
                        34 -> {
                            if (property.value > 0) {
                                if (property.value % 5 == 0) {
                                    property.value = ((property.value / 5) - 1) * 5
                                } else {
                                    property.value = ((property.value / 5)) * 5
                                }
                            }
                        }
                    }
                }
            }
            inputView {
                readonly = true
                preventTabStop()

                bind(property.mapBinding {
                    (it * (this@CoinGroup.value / 100.0)).format(2)
                })
            }
        }
    }
}
