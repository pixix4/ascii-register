package de.ascii

import de.westermann.kwebview.components.Body
import kotlin.browser.window

@Suppress("UNUSED")
fun main(args: Array<String>) {
    window.onload = {
        init()
    }
}

fun init() {
    Body += CashBox()
}
