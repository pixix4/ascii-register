package de.westermann.kwebview

import de.westermann.kobserve.property.mapBinding
import de.westermann.kobserve.property.property
import kotlin.browser.window

@Suppress("ClassName")
object i18n {
    private val data: MutableMap<String, Locale> = mutableMapOf()

    private var fallbackLocale: Locale = i18n.Locale.EMPTY

    val localeProperty = property(Locale.EMPTY)
    var locale by localeProperty

    val availableLocales: List<Locale>
        get() = data.values.sortedBy { it.id }


    fun register(id: String, name: String, path: String, fallback: Boolean = false) {
        val locale = Locale(id, name, path, fallback)

        if (fallback) {
            fallbackLocale = locale
            localeProperty.invalidate()
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
                locale = data[id] ?: fallbackLocale
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
        var result = findKey(locale, key)

        if (result == undefined) {
            result = findKey(fallbackLocale, key)
        }

        if (result == undefined) {
            console.warn("Cannot translate key '$key'!")
            return key
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
        if (count.toDouble() == 0.0 && json.hasOwnProperty("zero") as Boolean) {
            return replace(json.zero.toString(), arguments)
        } else if (count.toDouble() == 1.0 && json.hasOwnProperty("one") as Boolean) {
            return replace(json.one.toString(), arguments)
        }

        return if (json.hasOwnProperty("many") as Boolean)
            replace(json.many.toString(), arguments)
        else {
            replace(json.toString(), arguments)
        }

    }

    data class Locale(
            val id: String,
            val name: String,
            val path: String,
            val fallback: Boolean
    ) {
        var isLoaded = false
        var json: dynamic = js("{}")

        companion object {
            val EMPTY = Locale("__", "_", "", false).apply { isLoaded = true }
        }
    }
}

fun t(key: String) = i18n.localeProperty.mapBinding { i18n.t(key, emptyList()) }

fun t(key: String, vararg arguments: Any?) = i18n.localeProperty.mapBinding { i18n.t(key, arguments.map { null to it }) }

fun t(key: String, vararg arguments: Pair<String?, Any?>) = i18n.localeProperty.mapBinding { i18n.t(key, arguments.asList()) }

fun t(count: Number, key: String) = i18n.localeProperty.mapBinding { i18n.t(count, key, emptyList()) }

fun t(count: Number, key: String, vararg arguments: Any?) = i18n.localeProperty.mapBinding { i18n.t(count, key, arguments.map { null to it }) }

fun t(count: Number, key: String, vararg arguments: Pair<String?, Any?>) = i18n.localeProperty.mapBinding { i18n.t(count, key, arguments.asList()) }
