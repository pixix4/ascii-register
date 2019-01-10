package de.ascii

import de.westermann.kobserve.Property
import de.westermann.kobserve.basic.flatMapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.async
import kotlin.js.Date
import kotlin.math.roundToInt

class Cash(
        currentCash: CashEntry = CashEntry(),
        previousCash: CashEntry = CashEntry()
) {
    val currentCashProperty = property(currentCash)
    var currentCash by currentCashProperty

    val previousCashProperty = property(previousCash)
    var previousCash by previousCashProperty

    fun shift(cash: CashEntry, animate: Boolean = false) {
        previousCash = currentCash
        currentCash = cash

        if (animate) {
            val note100P = note100Property.value
            val note50P = note50Property.value
            val note20P = note20Property.value
            val note10P = note10Property.value
            val note5P = note5Property.value
            val coin200P = coin200Property.value
            val coin100P = coin100Property.value
            val coin50P = coin50Property.value
            val coin20P = coin20Property.value
            val coin10P = coin10Property.value
            val coin5P = coin5Property.value
            val coin2P = coin2Property.value
            val coin1P = coin1Property.value

            note100Property.value = previousNote100Property.value
            note50Property.value = previousNote50Property.value
            note20Property.value = previousNote20Property.value
            note10Property.value = previousNote10Property.value
            note5Property.value = previousNote5Property.value
            coin200Property.value = previousCoin200Property.value
            coin100Property.value = previousCoin100Property.value
            coin50Property.value = previousCoin50Property.value
            coin20Property.value = previousCoin20Property.value
            coin10Property.value = previousCoin10Property.value
            coin5Property.value = previousCoin5Property.value
            coin2Property.value = previousCoin2Property.value
            coin1Property.value = previousCoin1Property.value

            currentCash = cash

            animate(note100Property, previousNote100Property.value, note100P)
            animate(note50Property, previousNote50Property.value, note50P)
            animate(note20Property, previousNote20Property.value, note20P)
            animate(note10Property, previousNote10Property.value, note10P)
            animate(note5Property, previousNote5Property.value, note5P)
            animate(coin200Property, previousCoin200Property.value, coin200P)
            animate(coin100Property, previousCoin100Property.value, coin100P)
            animate(coin50Property, previousCoin50Property.value, coin50P)
            animate(coin20Property, previousCoin20Property.value, coin20P)
            animate(coin10Property, previousCoin10Property.value, coin10P)
            animate(coin5Property, previousCoin5Property.value, coin5P)
            animate(coin2Property, previousCoin2Property.value, coin2P)
            animate(coin1Property, previousCoin1Property.value, coin1P)
        } else {
            currentCash = cash
        }
    }

    private fun ease(t: Double): Double {
        var t2 = t * 2
        return (when {
            t2 <= 1 -> t2 * t2 * t2
            else -> {
                t2 -= 2
                t2 * t2 * t2 + 2
            }
        }) / 2.0
    }

    private fun animate(property: Property<Int>, from: Int, to: Int) {
        property.value = from

        val start = Date.now()
        val duration = ANIMATION_TIME
        val end = start + duration

        val delta = to - from

        fun step() {
            val now = Date.now()
            if (now > end) {
                property.value = to
            } else {
                val progress = ease((now - start) / duration)
                property.value = from + (progress * delta).roundToInt()

                async(10) { step() }
            }
        }

        async(10) { step() }
    }

    val note100Property = currentCashProperty.flatMapBinding(CashEntry::note100Property)
    val note50Property = currentCashProperty.flatMapBinding(CashEntry::note50Property)
    val note20Property = currentCashProperty.flatMapBinding(CashEntry::note20Property)
    val note10Property = currentCashProperty.flatMapBinding(CashEntry::note10Property)
    val note5Property = currentCashProperty.flatMapBinding(CashEntry::note5Property)
    val coin200Property = currentCashProperty.flatMapBinding(CashEntry::coin200Property)
    val coin100Property = currentCashProperty.flatMapBinding(CashEntry::coin100Property)
    val coin50Property = currentCashProperty.flatMapBinding(CashEntry::coin50Property)
    val coin20Property = currentCashProperty.flatMapBinding(CashEntry::coin20Property)
    val coin10Property = currentCashProperty.flatMapBinding(CashEntry::coin10Property)
    val coin5Property = currentCashProperty.flatMapBinding(CashEntry::coin5Property)
    val coin2Property = currentCashProperty.flatMapBinding(CashEntry::coin2Property)
    val coin1Property = currentCashProperty.flatMapBinding(CashEntry::coin1Property)
    val totalProperty = currentCashProperty.flatMapBinding(CashEntry::totalProperty)

    val previousNote100Property = previousCashProperty.flatMapBinding(CashEntry::note100Property)
    val previousNote50Property = previousCashProperty.flatMapBinding(CashEntry::note50Property)
    val previousNote20Property = previousCashProperty.flatMapBinding(CashEntry::note20Property)
    val previousNote10Property = previousCashProperty.flatMapBinding(CashEntry::note10Property)
    val previousNote5Property = previousCashProperty.flatMapBinding(CashEntry::note5Property)
    val previousCoin200Property = previousCashProperty.flatMapBinding(CashEntry::coin200Property)
    val previousCoin100Property = previousCashProperty.flatMapBinding(CashEntry::coin100Property)
    val previousCoin50Property = previousCashProperty.flatMapBinding(CashEntry::coin50Property)
    val previousCoin20Property = previousCashProperty.flatMapBinding(CashEntry::coin20Property)
    val previousCoin10Property = previousCashProperty.flatMapBinding(CashEntry::coin10Property)
    val previousCoin5Property = previousCashProperty.flatMapBinding(CashEntry::coin5Property)
    val previousCoin2Property = previousCashProperty.flatMapBinding(CashEntry::coin2Property)
    val previousCoin1Property = previousCashProperty.flatMapBinding(CashEntry::coin1Property)
    val previousTotalProperty = previousCashProperty.flatMapBinding(CashEntry::totalProperty)

    fun calculate() {
        val result = currentCash.copy()

        // Remove 1,2 and 5 cent
        result.coin5Property.value = 0
        result.coin2Property.value = 0
        result.coin1Property.value = 0

        CashProblem.solve(result)

        shift(result, true)
    }

    companion object {
        const val ANIMATION_TIME = 400
    }
}
