/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let start = 0, end = nums.length - 1;
  let i = 0;
  while (i <= end) {
    if (nums[i] === 0) {
      swap(nums, i, start);
      start++;
      i++;
    } else if (nums[i] === 2) {
      swap(nums, i, end);
      end--;
    } else {
      i++;
    }
  }

  function swap(nums, x, y) {
    let temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  }
};
// @lc code=end

