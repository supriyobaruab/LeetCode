/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let common = [];
  if (nums1.length >= nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i]) && !common.includes(nums2[i])) {
        common.push(nums2[i]);
        // console.log(nums2[i]);
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i]) && !common.includes(nums1[i])) {
        common.push(nums1[i]);
      }
    }
  }
  console.log(common);
  return common;
};
intersection([1, 2, 2, 1], [2, 2]);

intersection([4, 9, 5], [9, 4, 9, 8, 4]);
