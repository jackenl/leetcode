/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let n = nums.length;
  let max = 0;
  let end = 0;
  let steps = 0;
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === end) {
      end = max;
      steps++;
    }
  }
  return steps;
};
// @lc code=end

