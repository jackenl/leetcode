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
  let i = 0, j = n - 1;
  let index = n - 1;
  let value1, value2;
  while (i <= j) {
    value1 = nums[i] * nums[i];
    value2 = nums[j] * nums[j];
    if (value1 > value2) {
      ans[index] = value1;
      i++;
    } else {
      ans[index] = value2;
      j--;
    }
    index--;
  }
  return ans;
};
// @lc code=end

