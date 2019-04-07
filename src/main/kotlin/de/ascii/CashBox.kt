package de.ascii

import de.ascii.coin.CoinBox
import de.ascii.note.NoteBox
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.event.emit
import de.westermann.kobserve.event.subscribe
import de.westermann.kobserve.property.*
import de.westermann.kwebview.*
import de.westermann.kwebview.components.*

class CashBox : ViewCollection<View>() {

    private val cash = Cash()

    private val modeProperty = property(Mode.EDIT)
    private var mode by modeProperty

    private var saveCash = true
    private var hideSnapshot = false

    private val editable = modeProperty.mapBinding { it == Mode.EDIT }

    private lateinit var targetView: TextView

    private val totalErrorProperty = modeProperty.join(cash.totalProperty) { calc, total ->
        calc == Mode.CALCULATE && total != CashEntry.default.totalProperty.value
    }

    private val snapshotDiffProperty = Snapshot.currentSnapshotProperty.join(Snapshot.nowProperty) { snapshot, now ->
        now - (snapshot?.date ?: 0L)
    }

    private val snapshotStringProperty = snapshotDiffProperty.join(modeProperty) { snapshot, mode ->
        if (mode == Mode.HISOTRY || mode == Mode.SETTINGS) return@join ""
        val diff = snapshot / 1000
        if (snapshot == 0L || diff < 300 || cash.totalProperty.value == 0.0 || hideSnapshot) ""
        else Snapshot.formatTimeDiff(diff)
    }

    init {
        Snapshot.newestSnapshot.value?.let {
            cash.currentCash.load(it.cash)
        }

        cash.totalProperty.onChange {
            if (saveCash) Snapshot.save(cash.currentCash)
        }

        boxView {
            boxView {
                classList += "header-box"

                boxView {
                    classList.bind("error", totalErrorProperty)
                    val iconProperty: ReadOnlyProperty<Icon?> = modeProperty.mapBinding { if (it == Mode.EDIT) MaterialIcon.CLEAR else MaterialIcon.ARROW_BACK }

                    property(this::title).bind(modeProperty.mapBinding { if (it == Mode.EDIT) t("reset") else t("back") }.flatten())

                    iconView(iconProperty) {
                        onClick {
                            emit(ResetEvent)
                        }
                    }
                    iconView(MaterialIcon.HISTORY) {
                        property(this::title).bind(t("history"))
                        onClick {
                            mode = Mode.HISOTRY
                        }
                    }
                    iconView(MaterialIcon.SETTINGS) {
                        property(this::title).bind(t("settings"))
                        onClick {
                            mode = Mode.SETTINGS
                        }
                    }
                }

                textView(modeProperty.join(cash.totalProperty) { mode, total ->
                    when (mode) {
                        Mode.EDIT, Mode.CALCULATE -> constProperty("${total.format(2)} €")
                        Mode.SETTINGS -> t("settings")
                        Mode.HISOTRY -> t("history")
                    }
                }.flatten()) {
                    classList.bind("error", totalErrorProperty)
                }
                targetView = textView {
                    classList += "target"
                }
                textView(snapshotStringProperty) {
                    classList += "snapshot"
                }

                boxView {
                    classList.bind("error", totalErrorProperty)
                    textView(t("calculate")) {
                        onClick {
                            emit(CalculateEvent)
                        }
                    }
                }
            }

            boxView("container") {
                val box = BoxView().apply {
                    +CoinBox(cash, editable)
                    +NoteBox(cash, editable)
                }
                val settings = Settings()
                val history = History()

                bindView(modeProperty) {
                    when (mode) {
                        Mode.EDIT -> box
                        Mode.CALCULATE -> box
                        Mode.SETTINGS -> settings
                        Mode.HISOTRY -> history
                    }
                }
            }
        }
        boxView {
            +Envelope(cash, totalErrorProperty)
        }

        modeProperty.onChange {
            classList["calculate"] = mode == Mode.CALCULATE
            classList["history-mode"] = mode == Mode.HISOTRY
        }
        classList["calculate"] = mode == Mode.CALCULATE
        classList["history-mode"] = mode == Mode.HISOTRY

        Snapshot.onLoad {
            val oldSave = saveCash
            saveCash = false
            cash.currentCash.load(it.cash)
            saveCash = oldSave
            mode = Mode.EDIT
        }

        subscribe<CalculateEvent> {
            if (mode == Mode.EDIT) {
                saveCash = false
                cash.calculate()
                async(Cash.ANIMATION_TIME + 200) {
                    mode = Mode.CALCULATE
                }
            }
        }
        subscribe<ResetEvent> {
            if (mode == Mode.CALCULATE) {
                async(300) {
                    val current = cash.previousCash.copy()
                    cash.shift(cash.previousCash, true)
                    cash.previousCash = current
                    async(Cash.ANIMATION_TIME) {
                        cash.previousCash = CashEntry()
                        saveCash = true
                    }
                }
            } else if (mode == Mode.EDIT) {
                saveCash = false
                cash.shift(CashEntry(), true)
                cash.previousCash = CashEntry()
                async(Cash.ANIMATION_TIME) {
                    saveCash = true
                }
            }
            mode = Mode.EDIT
        }
    }
}

object CalculateEvent
object ResetEvent

enum class Mode {
    EDIT, CALCULATE, SETTINGS, HISOTRY
}
