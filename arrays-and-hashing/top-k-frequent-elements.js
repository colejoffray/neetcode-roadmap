// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let myMap = new Map()
    nums.forEach(value => {
        if (myMap.has(value)){
            let currentValue = myMap.get(value)
            myMap.set(value, currentValue + 1)
        }else{
            myMap.set(value, 1)
        }
    })
        
    let topKeys = Array.from(myMap.keys()).sort((a, b) => myMap.get(b) - myMap.get(a)).slice(0, k);
    return topKeys
};

console.log(topKFrequent([1,1,1,2,2,3]), 2);