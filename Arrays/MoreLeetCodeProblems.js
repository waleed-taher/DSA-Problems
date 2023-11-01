// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.

pref = [13];
function findArray(pref) {
  let arr = [];
  arr.push(pref[0]);
  for (let i = 0; i < pref.length - 1; i++) {
    let y = pref[i] ^ pref[i + 1];
    arr.push(y);
  }
  console.log(arr);
}

findArray(pref);

// reversing a string

const str = "Hi My Name is Waleed";
function Reverse(data) {
  let reversedstring;
  for (i = data.length; i >= 0; i--) {
    reversedstring += data[i];
  }
  return reversedstring;
}

const a = Reverse(str);
console.log(a);

const firstArray = [0, 2, 4, 5, 7, 8, 9];
const secondArray = [1, 3, 6];

function mergeSort(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}

const b = mergeSort(firstArray, secondArray);
console.log(b);
