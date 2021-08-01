/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const ans = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    ans[i] = new Array(i + 1);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        ans[i][j] = 1;
      } else {
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
      }
    }
  }
  return ans;
};
// @lc code=end

