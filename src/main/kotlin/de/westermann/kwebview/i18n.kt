package de.westermann.kwebview

import kotlin.browser.window

@Suppress("ClassName")
object i18n {
    private val data: MutableMap<String, Locale> = mutableMapOf()

    private var fallbackLocale: Locale? = null
    private var locale: Locale? = null

    fun register(id: String, name: String, path: String, fallback: Boolean = false) {
        val locale = Locale(id, name, path, fallback)

        if (fallback) {
            if (fallbackLocale != null) {
                throw IllegalStateException("Fallback locale is already set!")
            }

            fallbackLocale = locale
        }

        data[id] = locale

        window.fetch(path).then {
            it.json()
        }.then {
            locale.json = it
            locale.isLoaded = true
        }.catch {
            throw it
        }
    }

    val isReady: Boolean
        get() = data.values.all { it.isLoaded }

    fun load(id: String, block: () -> Unit) {
        fun ready() {
            if (isReady) {
                locale = data[id]
                block()
            } else {
                async(50) { ready() }
            }
        }
        ready()
    }

    private fun findKey(locale: Locale, key: String): dynamic {
        val keys = key.split(".")

        var result = locale.json
        for (k in keys) {
            if (result.hasOwnProperty(k) as Boolean) {
                result = result[k]
            } else {
                return undefined
            }
        }

        return result
    }

    private fun findKey(key: String): dynamic {
        var result: dynamic = undefined

        if (locale != null) {
            result = findKey(locale!!, key)
        }

        if (result == undefined) {
            if (fallbackLocale != null) {
                result = findKey(fallbackLocale!!, key)
            }
        }

        if (result == undefined) {
            throw InternationalizationError("Cannot find key '$key'!")
        } else {
            return result
        }
    }

    private fun replace(str: String, arguments: List<Pair<String?, Any?>>): String {
        val unnamed = arguments.filter { it.first == null }.map { it.second }
        val named = arguments.mapNotNull { it.first?.to(it.second) }

        var s = str

        for ((key, replacement) in named) {
            s = s.replace("{$key}", replacement?.toString() ?: "null")
        }

        for (replacement in unnamed) {
            if (s.contains("{}")) {
                s = s.replaceFirst("{}", replacement?.toString() ?: "null")
            }
        }

        return s
    }

    fun t(key: String, arguments: List<Pair<String?, Any?>>): String {
        return replace(findKey(key).toString(), arguments)
    }

    fun t(count: Number, key: String, arguments: List<Pair<String?, Any?>>): String {
        val json = findKey(key)
        if (count == 0 && json.hasOwnProperty("zero") as Boolean) {
            return replace(json.zero.toString(), arguments)
        } else if (count == 1 && json.hasOwnProperty("one") as Boolean) {
            return replace(json.one.toString(), arguments)
        }

        return if (json.hasOwnProperty("many") as Boolean)
            replace(json.many.toString(), arguments)
        else {
            replace(json.toString(), arguments)
        }

    }

    private class Locale(
            val id: String,
            val name: String,
            val path: String,
            val fallback: Boolean
    ) {
        var isLoaded = false
        var json = js("{}")
    }
}

class InternationalizationError(message: String? = null) : Error(message)

fun t(key: String) = i18n.t(key, emptyList())

fun t(key: String, vararg arguments: Any?) = i18n.t(key, arguments.map { null to it })

fun t(key: String, vararg arguments: Pair<String?, Any?>) = i18n.t(key, arguments.asList())

fun t(count: Number, key: String) = i18n.t(count, key, emptyList())

fun t(count: Number, key: String, vararg arguments: Any?) = i18n.t(count, key, arguments.map { null to it })

fun t(count: Number, key: String, vararg arguments: Pair<String?, Any?>) = i18n.t(count, key, arguments.asList())
