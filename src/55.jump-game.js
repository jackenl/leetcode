/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let position = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (position < i) return false;
    position = Math.max(position, nums[i] + i);
  }
  return true;
};
// @lc code=end

