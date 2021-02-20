/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  let n = pairs.length;
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.reduce((pre, cur) => {
    return Math.max(pre, cur);
  }, 0);
};
// @lc code=end

// dp[i] 表示以该索引元素为结尾的最长链长度
// dp[0] = 1
// dp[i] = max{1, dp[j] + 1 | S[i][0] > S[j][0] && i > j}