package de.ascii

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.createHtmlView

class CoinBox(
        val cash: Cash
) : ViewCollection<View>(createHtmlView()) {
    init {
        boxView {
            +CoinGroup("2 EURO", 12, 200, cash.coin200Property)
        }

        boxView {
            +CoinGroup("1 EURO", 11, 100, cash.coin100Property)
        }

        boxView {
            +CoinGroup("50 CENT", 11, 50, cash.coin50Property)
        }

        boxView {
            +CoinGroup("20 CENT", 12, 20, cash.coin20Property)
        }

        boxView {
            +CoinGroup("10 CENT", 13, 10, cash.coin10Property)
        }

        boxView {
            +CoinGroup("5 CENT", 13, 5, cash.coin5Property)
        }

        boxView {
            +CoinGroup("2 CENT", 6, 2, cash.coin2Property)
            +CoinGroup("1 CENT", 7, 1, cash.coin1Property)
        }
    }
}
