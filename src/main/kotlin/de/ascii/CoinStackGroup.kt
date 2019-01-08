package de.ascii

import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import kotlin.math.abs
import kotlin.math.floor
import kotlin.math.round

class CoinStackGroup(stackCount: Int, type: String, value: Double) : ViewCollection<CoinStack>(createHtmlView()) {
    init {
        for (i in (stackCount - 1) downTo 0) {
            val coin = CoinStack(type)


            for (c in coin) {
                c.dataset["position"] = (i * 5 + c.dataset["index"]!!.toInt()).toString()
            }

            val money = value * (i + 1) * 5
            if (abs(money - floor(money)) < 0.001) {
                coin.dataset["value"] = floor(money).toString()
            } else {
                coin.dataset["value"] = (round(money * 100) / 100).toString()
            }

            +coin
        }
    }
}