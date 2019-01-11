package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.ListenerReference
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.not
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.async
import de.westermann.kwebview.components.Body
import de.westermann.kwebview.components.TextView
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.format
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window

class CashBox : ViewCollection<View>() {

    private val cash = Cash()

    private val calculateModeProperty = property(false)
    private var calculateMode by calculateModeProperty

    private var saveCash = true

    private val editable = !calculateModeProperty

    private lateinit var extraView: TextView

    init {
        cash.note100Property.value = window.localStorage["note100"]?.toIntOrNull() ?: 0
        cash.note100Property.onChange {
            if (saveCash) {
                window.localStorage["note100"] = cash.note100Property.value.toString()
            }
        }
        cash.note50Property.value = window.localStorage["note50"]?.toIntOrNull() ?: 0
        cash.note50Property.onChange {
            if (saveCash) {
                window.localStorage["note50"] = cash.note50Property.value.toString()
            }
        }
        cash.note20Property.value = window.localStorage["note20"]?.toIntOrNull() ?: 0
        cash.note20Property.onChange {
            if (saveCash) {
                window.localStorage["note20"] = cash.note20Property.value.toString()
            }
        }
        cash.note10Property.value = window.localStorage["note10"]?.toIntOrNull() ?: 0
        cash.note10Property.onChange {
            if (saveCash) {
                window.localStorage["note10"] = cash.note10Property.value.toString()
            }
        }
        cash.note5Property.value = window.localStorage["note5"]?.toIntOrNull() ?: 0
        cash.note5Property.onChange {
            if (saveCash) {
                window.localStorage["note5"] = cash.note5Property.value.toString()
            }
        }
        cash.coin200Property.value = window.localStorage["coin200"]?.toIntOrNull() ?: 0
        cash.coin200Property.onChange {
            if (saveCash) {
                window.localStorage["coin200"] = cash.coin200Property.value.toString()
            }
        }
        cash.coin100Property.value = window.localStorage["coin100"]?.toIntOrNull() ?: 0
        cash.coin100Property.onChange {
            if (saveCash) {
                window.localStorage["coin100"] = cash.coin100Property.value.toString()
            }
        }
        cash.coin50Property.value = window.localStorage["coin50"]?.toIntOrNull() ?: 0
        cash.coin50Property.onChange {
            if (saveCash) {
                window.localStorage["coin50"] = cash.coin50Property.value.toString()
            }
        }
        cash.coin20Property.value = window.localStorage["coin20"]?.toIntOrNull() ?: 0
        cash.coin20Property.onChange {
            if (saveCash) {
                window.localStorage["coin20"] = cash.coin20Property.value.toString()
            }
        }
        cash.coin10Property.value = window.localStorage["coin10"]?.toIntOrNull() ?: 0
        cash.coin10Property.onChange {
            if (saveCash) {
                window.localStorage["coin10"] = cash.coin10Property.value.toString()
            }
        }
        cash.coin5Property.value = window.localStorage["coin5"]?.toIntOrNull() ?: 0
        cash.coin5Property.onChange {
            if (saveCash) {
                window.localStorage["coin5"] = cash.coin5Property.value.toString()
            }
        }
        cash.coin2Property.value = window.localStorage["coin2"]?.toIntOrNull() ?: 0
        cash.coin2Property.onChange {
            if (saveCash) {
                window.localStorage["coin2"] = cash.coin2Property.value.toString()
            }
        }
        cash.coin1Property.value = window.localStorage["coin1"]?.toIntOrNull() ?: 0
        cash.coin1Property.onChange {
            if (saveCash) {
                window.localStorage["coin1"] = cash.coin1Property.value.toString()
            }
        }

        boxView {
            boxView {
                classList += "header-box"

                boxView {
                    textView(calculateModeProperty.mapBinding { if (it) "Back" else "Reset" }) {
                        onClick {
                            if (calculateMode) {
                                calculateMode = false

                                async(300) {
                                    val current = cash.previousCash.copy()
                                    cash.shift(cash.previousCash, true)
                                    cash.previousCash = current
                                    async(Cash.ANIMATION_TIME) {
                                        cash.previousCash = CashEntry()
                                        saveCash = true
                                    }
                                }
                            } else {
                                cash.shift(CashEntry(), true)
                                cash.previousCash = CashEntry()
                            }
                        }

                        onMouseDown {
                            if (!calculateMode && cash.totalProperty.value == 0.0) {
                                val target = CashEntry.default
                                val references = mutableListOf<ListenerReference<*>>()
                                var shouldShow = true
                                Body.onMouseUp.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    shouldShow = false
                                    async(400) {
                                        extraView.text = ""
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)
                                Body.onMouseLeave.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    shouldShow = false
                                    async(400) {
                                        extraView.text = ""
                                        saveCash = true
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)

                                async(500) {
                                    if (shouldShow) {
                                        saveCash = false
                                        extraView.text = "Target cash"
                                        Cash.animate(cash.note100Property, 0, target.note100Property.value)
                                        Cash.animate(cash.note50Property, 0, target.note50Property.value)
                                        Cash.animate(cash.note20Property, 0, target.note20Property.value)
                                        Cash.animate(cash.note10Property, 0, target.note10Property.value)
                                        Cash.animate(cash.note5Property, 0, target.note5Property.value)
                                        Cash.animate(cash.coin200Property, 0, target.coin200Property.value)
                                        Cash.animate(cash.coin100Property, 0, target.coin100Property.value)
                                        Cash.animate(cash.coin50Property, 0, target.coin50Property.value)
                                        Cash.animate(cash.coin20Property, 0, target.coin20Property.value)
                                        Cash.animate(cash.coin10Property, 0, target.coin10Property.value)
                                        Cash.animate(cash.coin5Property, 0, target.coin5Property.value)
                                        Cash.animate(cash.coin2Property, 0, target.coin2Property.value)
                                        Cash.animate(cash.coin1Property, 0, target.coin1Property.value)
                                    }
                                }
                            }
                        }
                    }
                }

                textView(cash.totalProperty.mapBinding { "${it.format(2)} €" })
                extraView = textView {
                    classList += "extra"
                }

                boxView {
                    textView("Calculate") {
                        onClick {
                            if (!calculateMode) {
                                saveCash = false
                                cash.calculate()
                                async(Cash.ANIMATION_TIME + 200) {
                                    calculateMode = true
                                }
                            }
                        }
                    }
                }
            }

            +CoinBox(cash, editable)
            +NoteBox(cash, editable)
        }
        boxView {
            +Envelope(cash)
        }

        calculateModeProperty.onChange {
            classList["calculate"] = calculateMode
        }
        classList["calculate"] = calculateMode
    }
}
