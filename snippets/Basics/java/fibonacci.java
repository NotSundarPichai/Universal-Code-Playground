// Metadata Header (MANDATORY)
// -----------------------------
// Program Title: Fibonacci Sequence (Iterative)
// Author: IamBisrutPyne
// Date: 2025-10-11
//
// Description: Generates the Fibonacci sequence up to the n-th term using an iterative approach.
//
// Language: Java
//
// Time Complexity: O(n)
// Space Complexity: O(1)
// -----------------------------

import java.util.ArrayList;
import java.util.List;

public class FibonacciIterative {

    /**
     * Generates the Fibonacci sequence up to the n-th term iteratively.
     * Uses long to prevent integer overflow for larger sequences.
     *
     * @param n The number of terms to generate.
     * @return A list of the first n Fibonacci numbers.
     */
    public static List<Long> generate(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Input must be non-negative.");
        }
        
        List<Long> sequence = new ArrayList<>();
        if (n == 0) return sequence;
        
        long a = 0; // F(0)
        long b = 1; // F(1)

        sequence.add(a);
        if (n == 1) return sequence;

        sequence.add(b);
        
        for (int i = 2; i < n; i++) {
            long nextVal = a + b;
            sequence.add(nextVal);
            // Shift values
            a = b;
            b = nextVal;
        }
        return sequence;
    }

    public static void main(String[] args) {
        int n_terms = 20;
        System.out.println("Fibonacci sequence (first " + n_terms + " terms): " + generate(n_terms));
    }
}
