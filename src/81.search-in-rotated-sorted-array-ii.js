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
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return true;
    // 跳过重复节点
    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      l++;
      r--;
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;
};
// @lc code=end

