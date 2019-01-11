package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.ListenerReference
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.not
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.async
import de.westermann.kwebview.components.Body
import de.westermann.kwebview.components.TextView
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.format

class CashBox(
        private val cash: Cash
) : ViewCollection<View>() {

    val calculateModeProperty = property(false)
    var calculateMode by calculateModeProperty

    val editable = !calculateModeProperty

    private lateinit var extraView: TextView

    init {
        boxView {
            boxView {
                classList += "header-box"

                boxView {
                    textView(calculateModeProperty.mapBinding { if (it) "Back" else "Reset" }) {
                        onClick {
                            if (calculateMode) {
                                calculateMode = false

                                async(300) {
                                    val current = cash.previousCash.copy()
                                    cash.shift(cash.previousCash, true)
                                    cash.previousCash = current
                                    async(Cash.ANIMATION_TIME) {
                                        cash.previousCash = CashEntry()
                                    }
                                }
                            } else {
                                cash.shift(CashEntry(), true)
                                cash.previousCash = CashEntry()
                            }
                        }

                        onMouseDown {
                            if (!calculateMode && cash.totalProperty.value == 0.0) {
                                val target = CashEntry.default
                                val references = mutableListOf<ListenerReference<*>>()
                                var shouldShow = true
                                Body.onMouseUp.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    shouldShow = false
                                    async(400) {
                                        extraView.text = ""
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)
                                Body.onMouseLeave.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    shouldShow = false
                                    async(400) {
                                        extraView.text = ""
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)

                                async(500) {
                                    if (shouldShow) {
                                        extraView.text = "Target cash"
                                        Cash.animate(cash.note100Property, 0, target.note100Property.value)
                                        Cash.animate(cash.note50Property, 0, target.note50Property.value)
                                        Cash.animate(cash.note20Property, 0, target.note20Property.value)
                                        Cash.animate(cash.note10Property, 0, target.note10Property.value)
                                        Cash.animate(cash.note5Property, 0, target.note5Property.value)
                                        Cash.animate(cash.coin200Property, 0, target.coin200Property.value)
                                        Cash.animate(cash.coin100Property, 0, target.coin100Property.value)
                                        Cash.animate(cash.coin50Property, 0, target.coin50Property.value)
                                        Cash.animate(cash.coin20Property, 0, target.coin20Property.value)
                                        Cash.animate(cash.coin10Property, 0, target.coin10Property.value)
                                        Cash.animate(cash.coin5Property, 0, target.coin5Property.value)
                                        Cash.animate(cash.coin2Property, 0, target.coin2Property.value)
                                        Cash.animate(cash.coin1Property, 0, target.coin1Property.value)
                                    }
                                }
                            }
                        }
                    }
                }

                textView(cash.totalProperty.mapBinding { "${it.format(2)} €" })
                extraView = textView {
                    classList += "extra"
                }

                boxView {
                    textView("Calculate") {
                        onClick {
                            if (!calculateMode) {
                                cash.calculate()
                                async(Cash.ANIMATION_TIME + 200) {
                                    calculateMode = true
                                }
                            }
                        }
                    }
                }
            }

            +CoinBox(cash, editable)
            +NoteBox(cash, editable)
        }
        boxView {
            +Envelope(cash)
        }

        calculateModeProperty.onChange {
            classList["calculate"] = calculateMode
        }
        classList["calculate"] = calculateMode
    }
}
