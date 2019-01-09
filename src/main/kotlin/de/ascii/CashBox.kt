package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.createHtmlView
import de.westermann.kwebview.format

class CashBox(
        private val cash: Cash
) : ViewCollection<View>(createHtmlView()) {
    init {
        boxView {
            classList += "header-box"

            boxView {
                textView("Reset") {
                    onClick {
                        cash.shift(CashEntry(), true)
                        cash.previousCash = CashEntry()
                    }
                }
            }

            textView(cash.totalProperty.mapBinding { "${it.format(2)} €" })

            boxView {
                textView("Calculate")
            }
        }
        +CoinBox(cash)
        +NoteBox(cash)
    }
}
