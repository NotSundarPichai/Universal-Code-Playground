// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: Swift
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

/**
 * Calculates the factorial of a non-negative integer.
 * @param n The number to calculate the factorial of.
 * @return The factorial result.
 */
func factorial(n: UInt64) -> UInt64 {
    if n == 0 {
        return 1
    }
    var result: UInt64 = 1
    for i in 2...n {
        result *= i
    }
    return result
}

let num: UInt64 = 10
print("Factorial of \(num) is: \(factorial(n: num))")
// Output: Factorial of 10 is: 3628800
