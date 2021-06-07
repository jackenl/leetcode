/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1;
  let index = m + n - 1;
  while (i >= 0 || j >= 0) {
    if (i < 0) {
      nums1[index--] = nums2[j--];
    } else if (j < 0) {
      nums1[index--] = nums1[i--];
    } else {
      nums1[index--] = nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--];
    }
  }
};
// @lc code=end
