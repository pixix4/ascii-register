package de.ascii.coin

import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.format
import kotlin.math.abs
import kotlin.math.floor
import kotlin.math.round

class CoinStackGroup(stackCount: Int, type: String, value: Double) : ViewCollection<CoinStack>() {

    private val superMap = mapOf(
            '0' to '⁰',
            '1' to '¹',
            '2' to '²',
            '3' to '³',
            '4' to '⁴',
            '5' to '⁵',
            '6' to '⁶',
            '7' to '⁷',
            '8' to '⁸',
            '9' to '⁹'
    )

    private fun transformMoney(value: String): String {
        val split = value.split(".")
        return split.first() + split.last().map {
            superMap[it]
        }.joinToString("")
    }

    init {
        for (i in (stackCount - 1) downTo 0) {
            val stack = CoinStack(type)


            for (c in stack) {
                c.position = i * 5 + c.index
            }

            val money = value * (i + 1) * 5
            if (abs(money - floor(money)) < 0.001) {
                stack.dataset["value"] = floor(money).toString()
            } else {
                stack.dataset["value"] = transformMoney((round(money * 100) / 100).format(2))
            }

            +stack
        }
    }
}