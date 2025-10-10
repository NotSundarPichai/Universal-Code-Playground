import java.util.Scanner;

/**
 * Program Title: Prime Number Checker
 * Author: [Sreenivasulu-03]
 * Date: 2025-10-08
 *
 * Description: This program checks whether a given number is a prime number or not.
 * A prime number is a number greater than 1 that has no positive divisors other than
 * 1 and itself. The program uses an efficient method by checking divisibility only up to √n.
 *
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */

public class PrimeNumberCheck {

    /**
     * Checks if a number is prime.
     * @param n The number to check.
     * @return true if n is prime, false otherwise.
     */
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;

        // Check divisibility from 3 to √n
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter a number: ");

            while (!sc.hasNextInt()) {
                System.out.print("Invalid input! Please enter a valid number: ");
                sc.next();
            }

            int number = sc.nextInt();

            if (isPrime(number)) {
                System.out.println(number + " is a prime number.");
            } else {
                System.out.println(number + " is not a prime number.");
            }
        } catch (Exception e) {
            System.err.println("An unexpected error occurred: " + e.getMessage());
        }
    }
}
