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

  
  