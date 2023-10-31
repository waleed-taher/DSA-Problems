/**
 * @param {number[]} nums
 * @return {number[]}
 */
let numberofPair = (nums) => {
  let frequencyMap = new Map();
  let pairs = 0;

  for (const num of nums) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  for (const [num, count] of frequencyMap.entries()) {
    pairs += Math.floor(count / 2);
  }

  const leftover = nums.length - 2 * pairs;
  return [pairs, leftover];
};

let pairs2 = numberofPair([1, 1]);
console.log(pairs2);
