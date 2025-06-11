/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let flag = false;
  const number = x.toString();
  let reverse = "";
  const length = number.length;
  for (let i = length - 1; i >= 0; i--) {
    reverse += number[i];
  }
  if (reverse === number) {
    flag = true;
  }
  return flag;
};
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
