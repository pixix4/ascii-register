package de.ascii

import de.westermann.kobserve.EventHandler
import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.list.ObservableList
import de.westermann.kobserve.list.observableListOf
import de.westermann.kobserve.list.sortObservable
import de.westermann.kwebview.interval
import de.westermann.kwebview.t
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window
import kotlin.js.Date

class Snapshot private constructor(
        val id: Int,
        var date: Long,
        val cash: CashEntry
) {

    private val key = "$PREFIX-$id"

    fun save() {
        if (cash.totalProperty.value <= 0.0) {
            delete()
        } else {
            date = Date.now().toLong()
            val value = listOf(
                    date,
                    cash.note100Property.value,
                    cash.note50Property.value,
                    cash.note20Property.value,
                    cash.note10Property.value,
                    cash.note5Property.value,
                    cash.coin200Property.value,
                    cash.coin100Property.value,
                    cash.coin50Property.value,
                    cash.coin20Property.value,
                    cash.coin10Property.value,
                    cash.coin5Property.value,
                    cash.coin2Property.value,
                    cash.coin1Property.value
            ).joinToString(SEPARATOR)
            window.localStorage[key] = value
        }
    }

    fun load() {
        allowAdd = false
        currentSnapshot = this
        onLoad.emit(this)
    }

    fun delete() {
        window.localStorage.removeItem(key)
        list -= this
    }

    companion object {
        private const val PREFIX = "ascii-snapshot"
        private const val SEPARATOR = "|"
        private const val THRESHOLD = 1000 * 60 * 5 // 5 minutes
        private var allowAdd = false

        val onLoad = EventHandler<Snapshot>()

        fun save(cash: CashEntry) {
            if (cash.totalProperty.value <= 0.0) {
                allowAdd = false
                return
            }

            val last = newestSnapshot.value
            val now = Date.now().toLong()
            if (allowAdd && last != null && last.date + THRESHOLD > now) {
                last.cash.load(cash)
                last.save()
            } else {
                val id = (list.maxBy { it.id }?.id ?: -1) + 1
                val snap = Snapshot(id, now, cash)
                snap.save()
                list += snap
                allowAdd = true
            }
        }

        val list: ObservableList<Snapshot> = observableListOf()
        val sorted = list.sortObservable(Comparator { a, b -> b.date.compareTo(a.date) })

        val newestSnapshot = sorted.mapBinding { it.firstOrNull() }
        val currentSnapshotProperty = property(newestSnapshot.value)
        var currentSnapshot by currentSnapshotProperty

        private fun parse(key: String, value: String) {
            try {
                val id = key.removePrefix("$PREFIX-").toInt()
                val split = value.split(SEPARATOR)
                val date = split[0].toLong()
                val data = split.drop(1).map { it.toInt() }
                val cash = CashEntry(
                        data[0],
                        data[1],
                        data[2],
                        data[3],
                        data[4],
                        data[5],
                        data[6],
                        data[7],
                        data[8],
                        data[9],
                        data[10],
                        data[11],
                        data[12]
                )

                list += Snapshot(
                        id,
                        date,
                        cash
                )
            } catch (e: Error) {
            }
        }

        fun formatTimeDiff(seconds: Long): String {
            var diff = seconds
            if (diff < 60) {
                return t(diff, "second", diff)
            }
            diff /= 60
            if (diff < 60) {
                return t(diff, "minute", diff)
            }
            diff /= 60
            if (diff < 24) {
                return t(diff, "hour", diff)
            }
            diff /= 24
            if (diff < 30) {
                return t(diff, "day", diff)
            }
            diff /= 30
            if (diff < 12) {
                return t(diff, "month", diff)
            }
            diff /= 12
            return t(diff, "year", diff)
        }

        init {
            val length = window.localStorage.length
            for (i in 0 until length) {
                val key = window.localStorage.key(i) ?: continue
                if (key.startsWith(PREFIX)) {
                    val value = window.localStorage[key] ?: continue
                    parse(key, value)
                }
            }

            newestSnapshot.onChange {
                currentSnapshot = newestSnapshot.value
            }
            currentSnapshot = newestSnapshot.value

            interval(1000) {
                nowProperty.value = Date.now().toLong()
            }
        }

        val nowProperty = property(Date.now().toLong())
    }
}
