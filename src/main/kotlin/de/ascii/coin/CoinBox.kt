package de.ascii.coin

import de.ascii.Cash
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView

class CoinBox(
        val cash: Cash,
        editable: ReadOnlyProperty<Boolean>
) : ViewCollection<View>() {
    init {
        boxView {
            +CoinGroup("2 EURO", 12, 200, cash.coin200Property, cash.previousCoin200Property, editable)
        }

        boxView {
            +CoinGroup("1 EURO", 11, 100, cash.coin100Property, cash.previousCoin100Property, editable)
        }

        boxView {
            +CoinGroup("50 CENT", 11, 50, cash.coin50Property, cash.previousCoin50Property, editable)
        }

        boxView {
            +CoinGroup("20 CENT", 12, 20, cash.coin20Property, cash.previousCoin20Property, editable)
        }

        boxView {
            +CoinGroup("10 CENT", 13, 10, cash.coin10Property, cash.previousCoin10Property, editable)
        }

        boxView {
            +CoinGroup("5 CENT", 13, 5, cash.coin5Property, cash.previousCoin5Property, editable)
        }

        boxView {
            +CoinGroup("2 CENT", 6, 2, cash.coin2Property, cash.previousCoin2Property, editable)
            +CoinGroup("1 CENT", 7, 1, cash.coin1Property, cash.previousCoin1Property, editable)
        }
    }
}
