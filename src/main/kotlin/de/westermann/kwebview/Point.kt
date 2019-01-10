package de.westermann.kwebview

import kotlin.math.max
import kotlin.math.min
import kotlin.math.sqrt

/**
 * @author lars
 */
data class Point(
        val x: Double,
        val y: Double
) {
    constructor(x: Int, y: Int) : this(x.toDouble(), y.toDouble())

    operator fun plus(number: Int) = Point(x + number, y + number)
    operator fun plus(number: Double) = Point(x + number, y + number)
    operator fun plus(point: Point) = Point(x + point.x, y + point.y)

    operator fun minus(number: Int) = Point(x - number, y - number)
    operator fun minus(number: Double) = Point(x - number, y - number)
    operator fun minus(point: Point) = Point(x - point.x, y - point.y)

    operator fun times(number: Int) = Point(x * number, y * number)
    operator fun times(number: Double) = Point(x * number, y * number)
    operator fun times(point: Point) = Point(x * point.x, y * point.y)

    operator fun div(number: Int) = Point(x / number, y / number)
    operator fun div(number: Double) = Point(x / number, y / number)
    operator fun div(point: Point) = Point(x / point.x, y / point.y)

    operator fun unaryMinus(): Point = Point(-x, -y)

    fun min(): Double = min(x, y)
    fun max(): Double = max(x, y)

    val isZero: Boolean
        get() = x == 0.0 && y == 0.0

    companion object {
        val ZERO = Point(0.0, 0.0)
    }

    val asPx: String
        get() = "${x}px, ${y}px"

    fun distance(): Double = sqrt(x * x + y * y)

    infix fun distance(other: Point) = (this - other).distance()
}
