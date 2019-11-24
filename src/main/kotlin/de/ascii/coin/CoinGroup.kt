package de.ascii.coin

import de.ascii.MoneyGroup
import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.event.EventListener
import de.westermann.kobserve.property.mapBinding
import de.westermann.kwebview.*
import de.westermann.kwebview.components.*
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

        fun updatemove(pageY: Double) {
            val c0 = coins[0] ?: return
            if (c0.offsetTopTotal + c0.clientHeight < pageY) {
                property.value = 0
                return
            }

            var max = c0
            for ((_, coin) in coins.entries.sortedBy { it.key }) {
                val top = coin.offsetTopTotal

                if (top < pageY) {
                    property.value = coin.position + 1
                    return
                }

                max = coin
            }

            property.value = max.position + 1
        }

        val mousemove = lambda@{ event: MouseEvent ->
            if (event.type == "mouseup" || event.buttons == 0.toShort()) {
                references.forEach { it.detach() }
                references.clear()
            }

            updatemove(event.pageY)
        }

        val touchmove = lambda@{ event: TouchEvent ->
            val touches = event.touches.all()
            if (event.type == "touchend" || event.type == "touchcancel" || touches.size != 1) {
                references.forEach { it.detach() }
                references.clear()
            } else {
                event.preventDefault()
                // event.stopPropagation()
            }

            if (touches.size == 1) {
                updatemove(touches[0].pageY)
            }
        }

        onMouseDown {
            if (editable.value) {
                mousemove(it)

                references += Body.onMouseMove.reference(mousemove)
                references += Body.onMouseUp.reference(mousemove)
            }
        }
        onTouchStart {
            if (editable.value) {
                touchmove(it)

                references += Body.onTouchMove.reference(touchmove)
                references += Body.onTouchEnd.reference(touchmove)
                references += Body.onTouchCancel.reference(touchmove)
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
