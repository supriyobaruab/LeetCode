/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr1 = nums;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      let max = arr1[i] + arr1[j];
      if (!(max == target)) {
        max = arr1[i] + arr1[j];
      } else {
        return [i, j];
      }
    }
  }
};
const myarray = [2, 7, 11, 15];
console.log(twoSum(myarray, 9));
