// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// const shuffle = (nums, n) => {
//     const arr1 = nums.slice(0, n)
//     const arr2= nums.slice(n, nums.length)
//     const arr3 = []
    
//     for(let i = 0 ; i<n ; i++){
//         arr3.push(arr1[i])
//         arr3.push(arr2[i])
//         // arr3[i] = arr3.push(arr2[i])
//     }

//     return arr3
// };

// shuffle([2,5,1,3,4,7] , 3)


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let i = n - 1
    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10
        nums[j] |= nums[i]
        i--
    }
    
    i = 0
    for (let j = n; j < nums.length; j++) {
        const num1 = nums[j] & 1023
        const num2 = nums[j] >> 10
        nums[i] = num1
        nums[i + 1] = num2
        i += 2    
    }
    
    return nums
};