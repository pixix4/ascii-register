package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.*
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView

class CashBox(
        private val cash: Cash
) : ViewCollection<View>(createHtmlView()) {

    val calculateModeProperty = property(false)
    var calculateMode by calculateModeProperty

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
                    }
                }

                textView(cash.totalProperty.mapBinding { "${it.format(2)} €" })

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

            +CoinBox(cash)
            +NoteBox(cash)
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
