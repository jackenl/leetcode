/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n < 3) return 1;
  let x = 0, y = 1, z = 1;
  for (let i = 3; i <= n; i++) {
    let temp = x + y + z;
    x = y;
    y = z;
    z = temp;
  }
  return z;
};
// @lc code=end

