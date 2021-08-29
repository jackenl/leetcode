/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  const m = str1.length, n = str2.length;
  const subLen = gcd(m, n);
  return str2.substring(0, subLen);

  function gcd(p, q) {
    while (q !== 0) {
      let temp = p % q;
      p = q;
      q = temp;
    }
    return p;
  }
};
// @lc code=end
