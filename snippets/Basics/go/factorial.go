// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: Go
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

package main

import "fmt"

// factorial calculates n! iteratively.
func factorial(n int) int {
    if n < 0 {
        return 0 // Factorial is not defined for negative numbers.
    }
    result := 1
    for i := 2; i <= n; i++ {
        result *= i
    }
    return result
}

func main() {
    num := 10
    fmt.Printf("Factorial of %d is: %d\n", num, factorial(num))
    // Output: Factorial of 10 is: 3628800
}
