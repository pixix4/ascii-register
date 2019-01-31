package de.ascii

import de.westermann.kwebview.components.*
import de.westermann.kwebview.i18n
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window

@Suppress("UNUSED")
fun main(args: Array<String>) {
    i18n.register("en", "English", "languages/en.json", true)
    i18n.register("de", "Deutsch", "languages/de.json")

    if (window.location.search.isNotEmpty()) {
        val search = window.location.search.substring(1)
        val split = search.split("&").mapNotNull { it.split("=").let { if (it.size > 1) it[0] to it[1] else null } }.toMap()

        split["lang"]?.let { window.localStorage["language"] = it }
    }

    window.onload = {
        i18n.load(window.localStorage["language"] ?: "en") {
            Body += CashBox()
        }
    }
}
