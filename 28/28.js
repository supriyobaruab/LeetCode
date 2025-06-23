/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let index = haystack.indexOf(needle);
  if (index !== -1) {
    console.log(index);
    return index;
  } else {
    console.log("returned -1");
    return -1;
  }
};
strStr("leetcode", "leeto");
