// Binary search (iterative) - placeholder in javascript

/**
 * Binary Search Algorithm
 * ------------------------
 * Searches for a target value in a sorted array.
 * Returns the index of the target if found, otherwise returns -1.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Example ~_~:
 * E-Commerce Price Filtering - When products are sorted by price, binary search helps you, Find the first product ≥ ₹500. Find the last product ≤ ₹1000. This makes filtering and pagination lightning fast.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found
      } else if (arr[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11];
  const target = 7;
  
  const result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`✅ Element ${target} found at index ${result}`);
  } else {
    console.log(`❌ Element ${target} not found`);
  }