package de.ascii.coin

import de.westermann.kwebview.ViewCollection

class CoinStack(type: String) : ViewCollection<Coin>() {
    init {
        for (i in (5 - 1) downTo 0) {
            val coin = Coin(i)
            coin.classList += type
            +coin
        }
    }
}