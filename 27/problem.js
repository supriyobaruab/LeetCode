/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(nums, 2);
