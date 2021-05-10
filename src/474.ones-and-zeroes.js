/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  if (strs === null || strs.length === 0) {
    return 0;
  }
  let dp = Array(m + 1).fill(0).map(() => Array(n+1).fill(0));
  for (let x = 0; x < strs.length; x++) {
    let str = strs[x];
    let zeroes = 0, ones = 0;
    for (let y = 0; y < str.length; y++) {
      if (str.charAt(y) === '0') {
        zeroes++;
      } else {
        ones++;
      }
    }

    for (let i = m; i >= zeroes; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroes][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

