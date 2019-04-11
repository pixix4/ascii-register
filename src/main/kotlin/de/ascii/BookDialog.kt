package de.ascii

import de.westermann.kobserve.property.join
import de.westermann.kobserve.property.mapBinding
import de.westermann.kwebview.*
import de.westermann.kwebview.components.MaterialIcon
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.iconView
import de.westermann.kwebview.components.textView

class BookDialog(
        private val cash: Cash
) : ViewCollection<View>() {

    private val visible: Boolean
        get() = "active" in classList

    fun show() {
        classList += "active"
    }

    fun hide() {
        classList -= "active"
    }

    init {
        Document.onKeyPress {
            if (it.keyCode == 27 && visible) {
                hide()
                it.stopPropagation()
                it.preventDefault()
            }
        }

        onClick {
            hide()
        }

        boxView {
            onClick {
                it.stopPropagation()
            }
            boxView {
                textView(t("cash-book"))
                iconView(MaterialIcon.CLOSE) {
                    hide()
                }
            }
            boxView {
                textView(cash.previousTotalProperty.mapBinding { "${it.format(2)} €" })
                textView(cash.totalProperty.join(cash.previousTotalProperty) { current, old -> "${(old - current).format(2)} €" })
                textView(cash.totalProperty.mapBinding { "${it.format(2)} €" })
                textView("-")

                textView(Envelope.dateString)

                textView(cash.previousNote100Property.mapBinding { "$it" })
                textView(cash.previousNote50Property.mapBinding { "$it" })
                textView(cash.previousNote20Property.mapBinding { "$it" })
                textView(cash.previousNote10Property.mapBinding { "$it" })
                textView(cash.previousNote5Property.mapBinding { "$it" })
                textView(cash.previousCoin200Property.mapBinding { "$it" })
                textView(cash.previousCoin100Property.mapBinding { "$it" })
                textView(cash.previousCoin50Property.mapBinding { "$it" })
                textView(cash.previousCoin20Property.mapBinding { "$it" })
                textView(cash.previousCoin10Property.mapBinding { "$it" })
                textView(cash.previousCoin5Property.mapBinding { "$it" })
                textView(cash.previousCoin2Property.mapBinding { "$it" })
                textView(cash.previousCoin1Property.mapBinding { "$it" })

                textView(cash.previousTotalProperty.mapBinding { "${it.format(2)} €" })
                //textView(t("sign"))
            }
        }
    }
}