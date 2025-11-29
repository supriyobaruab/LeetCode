/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let number = [];
  for (let i = 0; i < nums.length + 1; i++) {
    number[i] = i;
  }
  console.log(number);
  for (let i = 0; i < nums.length + 1; i++) {
    if (!nums.includes(number[i])) {
      console.log(i);
      return i;
    }
  }
};
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
