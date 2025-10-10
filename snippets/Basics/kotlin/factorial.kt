// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: Kotlin
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

/**
 * Calculates the factorial of a non-negative integer.
 * @param n The number to calculate the factorial of.
 * @return The factorial result.
 */
fun factorial(n: Int): Long {
    // Use Long to handle larger results safely
    if (n < 0) {
        return 0
    }
    var result: Long = 1
    for (i in 2..n) {
        result *= i
    }
    return result
}

fun main() {
    val num = 10
    println("Factorial of $num is: ${factorial(num)}")
    // Output: Factorial of 10 is: 3628800
}
