package de.ascii

import de.westermann.kobserve.Property

object CashProblem {
    fun solve(cash: CashEntry) {
        val target = CashEntry.default

        while (cash.totalProperty.value > 100) {
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
                    Help(0.10, cash.coin10Property, target.coin10Property)
            ).filter {
                cash.totalProperty.value - it.value >= 100
            }.sortedBy { it.diffWeighted }.first()

            first.property.value -= 1
        }
    }

    data class Help(
            val value: Double,
            val property: Property<Int>,
            val target: Property<Int>
    ) {
        val diff = (target.value - property.value)

        val weight = when (value) {
            100.0 -> 10.0
            50.0 -> 10.0
            20.0 -> 1.5
            10.0 -> 1.1
            5.0 -> 1.1
            2.0 -> 1.0
            1.0 -> 0.9
            0.50 -> 0.9
            0.20 -> 1.2
            0.10 -> 1.5
            else -> 1.0
        }

        val diffWeighted = diff * weight
    }
}