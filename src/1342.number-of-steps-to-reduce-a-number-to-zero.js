/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;

  function dfs(num) {
    if (num === 0) return;
    count++;
    if (num % 2 === 0) {
      return dfs(num / 2);
    } else {
      return dfs(num - 1);
    }
  }
  dfs(num);
  return count;
};
// @lc code=end

