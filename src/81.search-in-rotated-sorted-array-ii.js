/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return true;
    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      left++;
      right--;
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && nums[right] >= target) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[mid] > target && nums[left] <= target) right = mid - 1;
      else left = mid + 1;
    }
  }
  return false;
};
// @lc code=end

