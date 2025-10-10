// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: Rust
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

fn factorial(n: u64) -> u64 {
    if n == 0 {
        return 1;
    }
    let mut result: u64 = 1;
    for i in 2..=n {
        result *= i;
    }
    result
}

fn main() {
    let num: u64 = 19;
    println!("Factorial of {} is: {}", num, factorial(num));
    // Output: Factorial of 10 is: 3628800
}
