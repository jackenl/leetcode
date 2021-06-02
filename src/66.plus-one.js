/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) return digits;
  }
  digits = new Array(n + 1).fill(0);
  digits[0] = 1;
  return digits;
};
// @lc code=end

