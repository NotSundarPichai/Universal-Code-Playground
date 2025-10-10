// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: C
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

#include <stdio.h>

// Calculates n! iteratively. Using long long for potentially larger results.
long long factorial(int n) {
    if (n < 0) {
        return 0;
    }
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int num = 10;
    printf("Factorial of %d is: %lld\n", num, factorial(num));
    // Output: Factorial of 10 is: 3628800
    return 0;
}
