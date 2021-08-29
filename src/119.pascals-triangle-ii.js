/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let dp = [];
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === 0 || j === i) {
        dp[j] = 1;
      } else {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp;
};
// @lc code=end

