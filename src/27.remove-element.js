/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
};
// @lc code=end

