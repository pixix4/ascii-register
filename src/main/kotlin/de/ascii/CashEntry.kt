package de.ascii

import de.westermann.kobserve.basic.property
import de.westermann.kobserve.plus
import de.westermann.kobserve.times

data class CashEntry(
        private var note100: Int = 0,
        private var note50: Int = 0,
        private var note20: Int = 0,
        private var note10: Int = 0,
        private var note5: Int = 0,
        private var coin200: Int = 0,
        private var coin100: Int = 0,
        private var coin50: Int = 0,
        private var coin20: Int = 0,
        private var coin10: Int = 0,
        private var coin5: Int = 0,
        private var coin2: Int = 0,
        private var coin1: Int = 0
) {
    val note100Property = property(this::note100)
    val note50Property = property(this::note50)
    val note20Property = property(this::note20)
    val note10Property = property(this::note10)
    val note5Property = property(this::note5)
    val coin200Property = property(this::coin200)
    val coin100Property = property(this::coin100)
    val coin50Property = property(this::coin50)
    val coin20Property = property(this::coin20)
    val coin10Property = property(this::coin10)
    val coin5Property = property(this::coin5)
    val coin2Property = property(this::coin2)
    val coin1Property = property(this::coin1)

    val totalProperty = note100Property * 100.0 +
            note50Property * 50.0 +
            note20Property * 20.0 +
            note10Property * 10.0 +
            note5Property * 5.0 +
            coin200Property * 2.0 +
            coin100Property * 1.0 +
            coin50Property * 0.5 +
            coin20Property * 0.2 +
            coin10Property * 0.1 +
            coin5Property * 0.05 +
            coin2Property * 0.02 +
            coin1Property * 0.01

    companion object {
        val default: CashEntry
            get() = CashEntry(
                    0,
                    0,
                    0,
                    2,
                    2,
                    17,
                    21,
                    20,
                    17,
                    16,
                    0,
                    0,
                    0
            )
    }
}