/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let m = nums1.length;
  let n = nums2.length;
  let totalLeft = Math.floor((m + n + 1) / 2);
  let left = 0, right = m;
  while (left < right) {
    let i = left + Math.floor((right - left + 1) / 2);
    let j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }
  let i = left;
  let j = totalLeft - i;
  let leftMax1 = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  let rightMin1 = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
  let leftMax2 = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  let rightMin2 = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];

  if ((m + n) % 2 === 1) {
    return Math.max(leftMax1, leftMax2);
  } else {
    return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2;
  }
};
// @lc code=end

