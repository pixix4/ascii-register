package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.createHtmlView
import de.westermann.kwebview.format

class CashBox(
        private val cash: Cash
) : ViewCollection<View>(createHtmlView()) {

    val calculateModeProperty = property(false)
    var calculateMode by calculateModeProperty

    private var backCash = CashEntry()

    init {
        boxView {
            boxView {
                classList += "header-box"

                boxView {
                    textView(calculateModeProperty.mapBinding { if (it) "Back" else "Reset" }) {
                        onClick {
                            if (calculateMode) {
                                cash.shift(backCash, false)
                                cash.previousCash = CashEntry()
                                calculateMode = false
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
                            calculateMode = true
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
    }
}
