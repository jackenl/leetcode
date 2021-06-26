/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  function quickMul(x, n) {
    let ans = 1;
    while (n > 0) {
      if (n % 2 === 1) ans *= x;
      x *= x;
      n = Math.floor(n / 2);
    }
    return ans;
  }
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
// @lc code=end
myPow(2, 10);
