/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let trimed = s.trim();
  let sliced = trimed.split(" ");
  //   return sliced[s.length - 1];
  console.log(sliced[sliced.length - 1].length);
};
s = "   fly me   to   the moon  ";
lengthOfLastWord(s);
