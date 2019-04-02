package de.ascii

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.textView

class Settings(): ViewCollection<View>() {
    init {
        textView("Work in progress")
    }
}
