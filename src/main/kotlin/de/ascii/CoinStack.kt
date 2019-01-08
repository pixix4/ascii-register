package de.ascii

import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView

class CoinStack(type: String) : ViewCollection<Coin>(createHtmlView()) {
    init {
        for (i in (5 - 1) downTo 0) {
            val coin = Coin()
            coin.classList += type
            coin.dataset["index"] = i.toString()
            +coin
        }
    }
}