<?php
// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Factorial Calculation (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-10
//
// Description: Computes the factorial of a non-negative integer using an iterative approach.
//
// Language: PHP
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

/**
 * Calculates the factorial of a non-negative integer.
 * @param int $n The number to calculate the factorial of.
 * @return int The factorial result.
 */
function factorial(int $n): int {
    if ($n < 0) {
        return 0;
    }
    $result = 1;
    for ($i = 2; $i <= $n; $i++) {
        $result *= $i;
    }
    return $result;
}

// Example usage
$num = 10;
echo "Factorial of " . $num . " is: " . factorial($num) . "\n";
// Output: Factorial of 10 is: 3628800

?>
