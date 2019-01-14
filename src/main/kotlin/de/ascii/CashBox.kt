package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.ListenerReference
import de.westermann.kobserve.basic.join
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.not
import de.westermann.kwebview.*
import de.westermann.kwebview.components.Body
import de.westermann.kwebview.components.TextView
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.textView
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window
import kotlin.js.Date

class CashBox : ViewCollection<View>() {

    private val cash = Cash()

    private val calculateModeProperty = property(false)
    private var calculateMode by calculateModeProperty

    private var saveCash = true
    private var hideSnapshot = false

    private val editable = !calculateModeProperty

    private lateinit var targetView: TextView

    private val snapshotTimeProperty = property(window.localStorage["snapshot"]?.toLongOrNull() ?: 0)
    private var snapshotTime by snapshotTimeProperty

    private val totalErrorProperty = calculateModeProperty.join(cash.totalProperty) { calc, total ->
        calc && total != CashEntry.default.totalProperty.value
    }

    private val snapshotStringProperty = snapshotTimeProperty.mapBinding {
        val now = Date.now().toLong()
        var diff = (now - it) / 1000
        if (it == 0L || diff < 300 || cash.totalProperty.value == 0.0 || hideSnapshot) {
            return@mapBinding ""
        } else {
            if (diff < 60) {
                return@mapBinding t(diff, "second", diff)
            }
            diff /= 60
            if (diff < 60) {
                return@mapBinding t(diff, "minute", diff)
            }
            diff /= 60
            if (diff < 24) {
                return@mapBinding  t(diff, "hour", diff)
            }
            diff /= 24
            if (diff < 30) {
                return@mapBinding  t(diff, "day", diff)
            }
            diff /= 30
            if (diff < 12) {
                return@mapBinding  t(diff, "month", diff)
            }
            diff /= 12
            return@mapBinding  t(diff, "year", diff)
        }
    }

    init {
        snapshotTimeProperty.onChange {
            window.localStorage["snapshot"] = snapshotTime.toString()
        }
        cash.note100Property.value = window.localStorage["note100"]?.toIntOrNull() ?: 0
        cash.note100Property.onChange {
            if (saveCash) {
                window.localStorage["note100"] = cash.note100Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.note50Property.value = window.localStorage["note50"]?.toIntOrNull() ?: 0
        cash.note50Property.onChange {
            if (saveCash) {
                window.localStorage["note50"] = cash.note50Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.note20Property.value = window.localStorage["note20"]?.toIntOrNull() ?: 0
        cash.note20Property.onChange {
            if (saveCash) {
                window.localStorage["note20"] = cash.note20Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.note10Property.value = window.localStorage["note10"]?.toIntOrNull() ?: 0
        cash.note10Property.onChange {
            if (saveCash) {
                window.localStorage["note10"] = cash.note10Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.note5Property.value = window.localStorage["note5"]?.toIntOrNull() ?: 0
        cash.note5Property.onChange {
            if (saveCash) {
                window.localStorage["note5"] = cash.note5Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin200Property.value = window.localStorage["coin200"]?.toIntOrNull() ?: 0
        cash.coin200Property.onChange {
            if (saveCash) {
                window.localStorage["coin200"] = cash.coin200Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin100Property.value = window.localStorage["coin100"]?.toIntOrNull() ?: 0
        cash.coin100Property.onChange {
            if (saveCash) {
                window.localStorage["coin100"] = cash.coin100Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin50Property.value = window.localStorage["coin50"]?.toIntOrNull() ?: 0
        cash.coin50Property.onChange {
            if (saveCash) {
                window.localStorage["coin50"] = cash.coin50Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin20Property.value = window.localStorage["coin20"]?.toIntOrNull() ?: 0
        cash.coin20Property.onChange {
            if (saveCash) {
                window.localStorage["coin20"] = cash.coin20Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin10Property.value = window.localStorage["coin10"]?.toIntOrNull() ?: 0
        cash.coin10Property.onChange {
            if (saveCash) {
                window.localStorage["coin10"] = cash.coin10Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin5Property.value = window.localStorage["coin5"]?.toIntOrNull() ?: 0
        cash.coin5Property.onChange {
            if (saveCash) {
                window.localStorage["coin5"] = cash.coin5Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin2Property.value = window.localStorage["coin2"]?.toIntOrNull() ?: 0
        cash.coin2Property.onChange {
            if (saveCash) {
                window.localStorage["coin2"] = cash.coin2Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }
        cash.coin1Property.value = window.localStorage["coin1"]?.toIntOrNull() ?: 0
        cash.coin1Property.onChange {
            if (saveCash) {
                window.localStorage["coin1"] = cash.coin1Property.value.toString()
                snapshotTime = Date.now().toLong()
            }
        }

        boxView {
            boxView {
                classList += "header-box"

                boxView {
                    textView(calculateModeProperty.mapBinding { if (it) t("back") else t("reset") }) {
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
                                hideSnapshot = true
                                Body.onMouseUp.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    hideSnapshot = false
                                    async(400) {
                                        targetView.text = ""
                                        saveCash = true
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)
                                Body.onMouseLeave.reference {
                                    for (r in references) {
                                        r.remove()
                                    }

                                    hideSnapshot = false
                                    async(400) {
                                        targetView.text = ""
                                        saveCash = true
                                    }

                                    cash.shift(CashEntry(), true)
                                    cash.previousCash = CashEntry()
                                }?.let(references::add)

                                async(500) {
                                    if (hideSnapshot) {
                                        saveCash = false
                                        targetView.text = t("target_cash")
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

                textView(cash.totalProperty.mapBinding { "${it.format(2)} €" }) {
                    classList.bind("error", totalErrorProperty)
                }
                targetView = textView {
                    classList += "target"
                }
                textView(snapshotStringProperty) {
                    classList += "snapshot"
                }

                boxView {
                    textView(t("calculate")) {
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
            +Envelope(cash, totalErrorProperty)
        }

        calculateModeProperty.onChange {
            classList["calculate"] = calculateMode
        }
        classList["calculate"] = calculateMode

        interval(1000) {
            snapshotStringProperty.invalidate()
        }
    }
}
