/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let tem = "";
  for (let i = 0; i < digits.length; i++) {
    tem += digits[i];
  }
  let intTem = parseInt(tem);
  intTem++;
  let sTem = intTem.toString();
  let final = sTem.split("").map(Number);
  return final;
};
digits = [1, 2, 3];
plusOne(digits);
