package de.ascii

import de.westermann.kwebview.components.Body
import de.westermann.kwebview.components.boxView
import kotlin.browser.window

@Suppress("UNUSED")
fun main(args: Array<String>) {
    window.onload = {
        init()
    }
}

fun init() {
    val cash = Cash()

    Body += CashBox(cash)
}
