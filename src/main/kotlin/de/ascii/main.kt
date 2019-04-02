package de.ascii

import de.westermann.kwebview.components.Body
import de.westermann.kwebview.i18n
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window

@Suppress("UNUSED")
fun main(args: Array<String>) {
    i18n.register("en", "English", "languages/en.json", true)
    i18n.register("de", "Deutsch", "languages/de.json")

    window.onload = {
        i18n.load(window.localStorage["language"] ?: "en") {
            Body += CashBox()

            i18n.localeProperty.onChange {
                window.localStorage["language"] = i18n.locale.id
            }
        }
    }
}
