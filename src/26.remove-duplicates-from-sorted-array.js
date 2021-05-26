/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[len]) {
      len++;
      nums[len] = nums[i];
    }
  }
  return len + 1;
};
// @lc code=end

