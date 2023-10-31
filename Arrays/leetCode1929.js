// Given an integer array nums of length n, you want to create an array ans of length 2n 
// where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// beats 95.6 in runtime and 94 in memory
const getConcat = (nums) => {
   let num2 = [...nums]
   let final = nums.concat(num2)
   return final
    
}

getConcat([1,2,1,2])

// var getConcatenation = function(nums) {
//     const result = [];
//     for(let i= 0;  i< nums.length; i++) {
//         result[i] = nums[i];
//         result [i + nums.length] = nums[i]
//     }
//     return result;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var getConcatenation = function(nums) {
//     return nums.concat(nums);
// };