package de.ascii.coin

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView

class Coin(
    val index: Int
): View(createHtmlView()) {
    var position: Int = 0
}