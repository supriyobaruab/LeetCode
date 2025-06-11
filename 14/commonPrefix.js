/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = "";

  console.log(strs.length);
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]; // character at current position in first string

    for (let j = 1; j < strs.length; j++) {
      // if index i is out of bounds or characters don't match
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char; // all strings have the same char at index i
  }

  return prefix;
};

console.log(longestCommonPrefix(["Flower", "Floe"])); // Output: "F"
