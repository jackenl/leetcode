/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const n = nums.length;
  const ans = new Array(n);
  let i = 0, j = n - 1, pos = n - 1;
  while (i <= j) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      ans[pos] = nums[i] * nums[i];
      i++;
    } else {
      ans[pos] = nums[j] * nums[j];
      j--;
    }
    pos--;
  }
  return ans;
};
// @lc code=end

