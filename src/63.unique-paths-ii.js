/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length, n = obstacleGrid[0].length;
  let dp = new Array(n).fill(0);
  dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else if (j > 0) {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};
// @lc code=end

