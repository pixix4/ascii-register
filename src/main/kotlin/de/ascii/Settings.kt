package de.ascii

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.selectView
import de.westermann.kwebview.components.textView
import de.westermann.kwebview.i18n
import de.westermann.kwebview.t

class Settings() : ViewCollection<View>() {
    init {
        boxView {
            textView(t("language"))
            selectView(i18n.availableLocales, i18n.localeProperty, transform = { locale: i18n.Locale ->
                "${locale.name} (${locale.id})"
            })
        }
    }
}
