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
 * Example:
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

  //Leetcode question: 875. Koko Eating Bananas
/** 
* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
* Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

//solution:

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
  
    const hoursNeeded = (speed) => {
      let hours = 0;
      for (let pile of piles) {
        hours += Math.ceil(pile / speed);
      }
      return hours;
    };
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (hoursNeeded(mid) <= h) {
        right = mid; // try smaller speed
      } else {
        left = mid + 1; // need faster speed
      }
    }
  
    return left;
  };
  
  // Example:
  console.log(minEatingSpeed([3,6,7,11], 8)); // Output: 4
  console.log(minEatingSpeed([30,11,23,4,20], 5)); // Output: 30
  console.log(minEatingSpeed([30,11,23,4,20], 6)); // Output: 23

  
  