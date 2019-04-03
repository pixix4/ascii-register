package de.ascii

import de.westermann.kobserve.basic.mapBinding
import de.westermann.kobserve.basic.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.*
import de.westermann.kwebview.extra.listFactory
import de.westermann.kwebview.format
import de.westermann.kwebview.i18n
import kotlin.js.Date

class History() : ViewCollection<View>() {
    init {
        table {
            row {
                head { textView("Date") }
                head { textView("Total") }
                head { textView("Action") }
            }
            tbody {
                listFactory(Snapshot.sorted, { snapshot ->
                    TableRow().apply {
                        cell {
                            textView(Snapshot.nowProperty.mapBinding {
                                Snapshot.formatTimeDiff((it - snapshot.date) / 1000)
                            })

                            property(this::title).bind(Snapshot.nowProperty.mapBinding {
                                Date(snapshot.date).toLocaleString(i18n.locale.id)
                            })
                            onClick {
                                snapshot.load()
                            }
                        }
                        cell {
                            textView(snapshot.cash.totalProperty.mapBinding { "${it.format(2)} €" })
                            onClick {
                                snapshot.load()
                            }
                        }
                        cell {
                            iconView(MaterialIcon.DELETE) {
                                onClick {
                                    snapshot.delete()
                                }
                            }
                        }
                    }
                }, animateRemove = 400)
            }
        }
    }
}
