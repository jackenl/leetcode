/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let n = nums.length;
  let left = 0, right = n - 1;
  let l = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2 );
    if (nums[mid] === target) {
      right = mid - 1;
      l = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  left = 0, right = n - 1;
  let r = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
      r = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [l, r];
};
// @lc code=end

