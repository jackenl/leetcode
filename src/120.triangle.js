/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill(0);
  dp[0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (j > 0 && j < i) {
        dp[j] = Math.min(dp[j - 1], dp[j])
      } else if (j === i) {
        dp[j] = dp[j - 1];
      }
      dp[j] += triangle[i][j];
    }
  }
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[i]);
  }
  return min;
};
// @lc code=end
minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);
