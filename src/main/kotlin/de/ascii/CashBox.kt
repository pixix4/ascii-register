package de.ascii

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView

class CashBox(
        val cash: Cash
): ViewCollection<View>(createHtmlView()) {
    init {
        this += CoinBox(cash)
    }
}
