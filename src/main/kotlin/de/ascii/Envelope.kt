package de.ascii

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.createHtmlView

class Envelope(
        val cash: Cash
) : ViewCollection<View>(createHtmlView()) {
    init {
        boxView {
            textView("Envelope")
        }
        boxView {
            +EnvelopeEntry("100 EURO", 100.0, cash.note100Property, cash.previousNote100Property)
            +EnvelopeEntry("50 EURO", 50.0, cash.note50Property, cash.previousNote50Property)
            +EnvelopeEntry("20 EURO", 20.0, cash.note20Property, cash.previousNote20Property)
            +EnvelopeEntry("10 EURO", 10.0, cash.note10Property, cash.previousNote10Property)
            +EnvelopeEntry("5 EURO", 5.0, cash.note5Property, cash.previousNote5Property)
            +EnvelopeEntry("2 EURO", 2.0, cash.coin200Property, cash.previousCoin200Property)
            +EnvelopeEntry("1 EURO", 1.0, cash.coin100Property, cash.previousCoin100Property)
            +EnvelopeEntry("50 CENT", 0.5, cash.coin50Property, cash.previousCoin50Property)
            +EnvelopeEntry("20 CENT", 0.2, cash.coin20Property, cash.previousCoin20Property)
            +EnvelopeEntry("10 CENT", 0.1, cash.coin10Property, cash.previousCoin10Property)
            +EnvelopeEntry("5 CENT", 0.05, cash.coin5Property, cash.previousCoin5Property)
            +EnvelopeEntry("2 CENT", 0.02, cash.coin2Property, cash.previousCoin2Property)
            +EnvelopeEntry("1 CENT", 0.01, cash.coin1Property, cash.previousCoin1Property)
        }
    }
}