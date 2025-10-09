import java.util.Scanner;

/**
 * Program Title: Palindrome Checker
 * Author: [Sreenivasulu-03]
 * Date: 2025-10-08
 *
 * Description: This program checks whether a given string is a palindrome or not.
 * A palindrome is a word, number, or phrase that reads the same backward as forward.
 * The program ignores case and spaces for a clean comparison.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

public class PalindromeCheck {

    /**
     * Checks if the given string is a palindrome.
     * @param str The input string to check.
     * @return true if the string is a palindrome, false otherwise.
     */
    public static boolean isPalindrome(String str) {
        // Convert to lowercase and remove spaces
        str = str.toLowerCase().replaceAll("\\s+", "");

        int left = 0;
        int right = str.length() - 1;

        // Compare characters from both ends
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a word or phrase: ");
        String input = sc.nextLine();

        if (isPalindrome(input)) {
            System.out.println("✅ \"" + input + "\" is a palindrome!");
        } else {
            System.out.println("❌ \"" + input + "\" is not a palindrome.");
        }

        sc.close();
    }
}
