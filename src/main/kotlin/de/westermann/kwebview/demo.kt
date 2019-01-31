package de.westermann.kwebview

import de.westermann.kobserve.basic.property
import de.westermann.kwebview.components.*

fun demo() {

    Body.boxView {
        h1("KWebView - Demo")
        textView("This is a demo page for the KWebView library.")
        table {
            row {
                head(2) {
                    h2("InputView")
                }
            }
            row {
                cell {
                    textView("Default input: ")
                }
                cell {
                    inputView {
                        placeholder = "Demo input field"
                    }
                }
            }
            row {
                cell {
                    textView("Password input: ")
                }
                cell {
                    inputView(InputType.PASSWORD) {
                        placeholder = "Password field"
                    }
                }
            }
            row {
                cell {
                    textView("Number input: ")
                }
                cell {
                    inputView(InputType.NUMBER) {
                        min = 0.0
                        max = 10.0
                        value = "5"
                    }
                }
            }
            row {
                val testValue = property("Max")
                cell {
                    inputView(testValue)
                }
                cell {
                    filterList(testValue, StringFilter(listOf("Max", "Maria", "Michael", "Lucas", "Felix", "Anton", "Antonia")))
                }
            }
        }
    }
}