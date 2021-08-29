/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const dp = new Array(n + 1);
  dp[1] = 1;
  let p2 = 1, p3 = 1, p5 = 1;
  for (let i = 2; i <= n; i++) {
    let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
    dp[i] = Math.min(num2, Math.min(num3, num5));
    if (dp[i] === num2) {
      p2++;
    }
    if (dp[i] === num3) {
      p3++;
    }
    if (dp[i] === num5) {
      p5++;
    }
  }
  return dp[n];
};
// @lc code=end

