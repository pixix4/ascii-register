package de.ascii

import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.mapBinding
import de.westermann.kobserve.property.property
import de.westermann.kobserve.minus
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.*
import de.westermann.kwebview.format
import de.westermann.kwebview.t
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window
import kotlin.js.Date

class Envelope(
        val cash: Cash,
        val errorProperty: ReadOnlyProperty<Boolean>
) : ViewCollection<View>() {

    private val sumProperty = cash.previousTotalProperty - cash.totalProperty

    init {
        boxView("envelope-header") {
            classList.bind("error", errorProperty)
            textView(t("envelope"))
        }
        boxView("envelope-body") {
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
        boxView("envelope-total") {
            textView(t("total").mapBinding { "$it: " })
            inputView(sumProperty.mapBinding { "${it.format(2)} €" }) {
                readonly = true
                preventTabStop()
            }
        }

        boxView("envelope-cover") {
            table {
                row {
                    cell {
                        textView(t("name").mapBinding { "$it: " })
                    }
                    cell {
                        inputView(window.localStorage["username"] ?: "") {
                            valueProperty.onChange {
                                window.localStorage["username"] = value
                            }
                            property(this::placeholder ).bind(t("your_name"))
                        }
                    }
                }
                row {
                    cell {
                        textView(t("date").mapBinding { "$it: " })
                    }
                    cell {
                        textView(dateString)
                    }
                }
                row {
                    cell {
                        textView(t("money").mapBinding { "$it: " })
                    }
                    cell {
                        textView(sumProperty.mapBinding { "${it.format(2)} €" })
                    }
                }
            }
        }
    }

    companion object {

        val dateString = Date().let { date ->
            "${date.getDate().let {
                if (it < 10) "0$it" else it
            }}.${(date.getMonth() + 1).let {
                if (it < 10) "0$it" else it
            }}.${date.getFullYear()}"
        }
    }
}