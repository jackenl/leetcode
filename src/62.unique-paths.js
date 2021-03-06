/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }
  const dp = new Array(n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[j] = 1;
      } else {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};
// @lc code=end

// dp[i][j] 表示起点到坐标（i,j）的不同路线数量
// dp[i][0] = dp[0][j] = 1
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1]