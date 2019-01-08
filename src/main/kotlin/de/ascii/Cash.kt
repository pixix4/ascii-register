package de.ascii

import de.westermann.kobserve.basic.property

data class Cash(
        private var note500: Int = 0,
        private var note200: Int = 0,
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
    val note500Property = property(this::note500)
    val note200Property = property(this::note200)
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
}