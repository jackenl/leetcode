/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let n1 = text1.length, n2 = text2.length;
  let dp = [new Array(n2 + 1).fill(0)];
  for (let i = 1; i <= n1; i++) {
    dp[i] = [0];
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n1][n2];
};
// @lc code=end

