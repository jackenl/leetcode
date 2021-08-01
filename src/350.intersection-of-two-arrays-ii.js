/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const ans = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0;
  let index = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      ans[index++] = nums1[i];
      i++;
      j++;
    }
  }
  return ans;
};
// @lc code=end

