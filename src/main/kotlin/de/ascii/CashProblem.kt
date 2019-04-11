package de.ascii

import de.westermann.kobserve.Property

object CashProblem {
    fun solve(cash: CashEntry) {
        val target = CashEntry.default
        val targetTotal = target.totalProperty.value

        while (cash.totalProperty.value > targetTotal) {
            val first = listOf(
                    Help(100.0, cash.note100Property, target.note100Property),
                    Help(50.0, cash.note50Property, target.note50Property),
                    Help(20.0, cash.note20Property, target.note20Property),
                    Help(10.0, cash.note10Property, target.note10Property),
                    Help(5.0, cash.note5Property, target.note5Property),
                    Help(2.0, cash.coin200Property, target.coin200Property),
                    Help(1.0, cash.coin100Property, target.coin100Property),
                    Help(0.50, cash.coin50Property, target.coin50Property),
                    Help(0.20, cash.coin20Property, target.coin20Property),
                    Help(0.10, cash.coin10Property, target.coin10Property),
                    Help(0.05, cash.coin5Property, target.coin5Property),
                    Help(0.02, cash.coin2Property, target.coin2Property),
                    Help(0.01, cash.coin1Property, target.coin1Property)
            ).filter {
                cash.totalProperty.value - it.value >= targetTotal && it.property.value > 0
            }.sortedBy { it.diffWeighted }.firstOrNull() ?: return

            first.property.value -= 1
        }
    }

    data class Help(
            val value: Double,
            val property: Property<Int>,
            val target: Property<Int>
    ) {
        private val diff = (target.value - property.value)

        private val weight = when (value) {
            100.0 -> 10.0
            50.0 -> 10.0
            20.0 -> 4.0
            10.0 -> 1.1
            5.0 -> 1.1
            2.0 -> 1.0
            1.0 -> 0.9
            0.50 -> 0.9
            0.20 -> 1.2
            0.10 -> 1.5
            0.05 -> 6.0
            0.02 -> 9.0
            0.01 -> 9.0
            else -> 1.0
        }

        val diffWeighted = diff * weight
    }
}