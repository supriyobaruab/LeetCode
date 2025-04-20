/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s;
  let lastValue = arr[arr.length - 1];
  let total = romanValues[lastValue];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (romanValues[arr[i]] < romanValues[lastValue]) {
      console.log(i);
      total = total - romanValues[arr[i]];
      lastValue = arr[i];
    } else {
      total = total + romanValues[arr[i]];
    }
  }
  console.log(total);
};
romanToInt("MCMXCIV");
