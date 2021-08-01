/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const n = nums.length;
  let left = 0, right = 0;
  while (right < n) {
    if (nums[right] !== 0) {
      const temp = nums[left];
      nums[left++] = nums[right];
      nums[right] = temp;
    }
    right++;
  }
};
// @lc code=end

