/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (nums, start, end) => {
    let i = start, j = end;
    while (i < j) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  
  const n = nums.length;
  k %= n; // for the case when k > n
  reverse(nums, 0, n - 1); // reverse all arr
  reverse(nums, 0, k - 1); // reverse 0 to k-1 indexes arr
  reverse(nums, k, n - 1); // reverse k to n-1 indexes arr
};
// @lc code=end

