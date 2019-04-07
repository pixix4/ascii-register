package de.ascii.coin

import de.ascii.MoneyGroup
import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.event.EventListener
import de.westermann.kobserve.property.mapBinding
import de.westermann.kwebview.async
import de.westermann.kwebview.components.*
import de.westermann.kwebview.format
import org.w3c.dom.events.MouseEvent

class CoinGroup(
        name: String,
        stackCount: Int,
        private val value: Int,
        property: Property<Int>,
        private val previousProperty: Property<Int>,
        editable: ReadOnlyProperty<Boolean>
) : MoneyGroup(property, editable, stackCount * 5) {


    override lateinit var input: InputView

    private fun updateCoin(coin: Coin) {
        coin.classList["active"] = coin.position < property.value
        coin.classList["overflow"] = coin.position + maximum < property.value
        coin.classList["dead"] = 2 * maximum < property.value

        coin.classList["previous"] = coin.position < previousProperty.value
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
        previousProperty.onChange {
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

        val references = mutableListOf<EventListener<*>>()

        val mousemove = lambda@{ event: MouseEvent ->
            if (event.type == "mouseup" || event.buttons == 0.toShort()) {
                references.forEach { it.detach() }
                references.clear()
            }

            val mouse = event.pageY
            val c0 = coins[0] ?: return@lambda
            if (c0.offsetTopTotal + c0.clientHeight < mouse) {
                property.value = 0
                return@lambda
            }

            var max = c0
            for ((_, coin) in coins.entries.sortedBy { it.key }) {
                val top = coin.offsetTopTotal

                if (top < mouse) {
                    property.value = coin.position + 1
                    return@lambda
                }

                max = coin
            }

            property.value = max.position + 1
        }

        onMouseDown {
            if (editable.value) {
                mousemove(it)

                references += Body.onMouseMove.reference(mousemove)
                references += Body.onMouseUp.reference(mousemove)
            }
        }

        boxView {
            onMouseDown {
                it.stopPropagation()
            }

            classList += "coin-input"

            input = inputView {
                maxLength = 3

                bind(stringProperty)

                editable.onChange {
                    readonly = !editable.value
                }
                readonly = !editable.value

                var focused = false

                onFocus {
                    if (!focused) {
                        focused = true
                        async {
                            selectRange(0, value.length)
                        }
                    }
                }
                onBlur {
                    focused = false
                }

                onKeyDown(this@CoinGroup::onKeyDown)
            }
            inputView {
                readonly = true
                preventTabStop()

                bind(property.mapBinding {
                    (it * (this@CoinGroup.value / 100.0)).format(2) + " €"
                })
            }
        }
    }
}
