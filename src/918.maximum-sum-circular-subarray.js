/*
 * @lc app=leetcode id=918 lang=javascript
 *
 * [918] Maximum Sum Circular Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  if (nums.length === 1) return nums[0];
  const n = nums.length;
  let max = nums[0], dp1 = max;
  let min = Math.min(0, nums[0]), dp2 = min;
  let sum = nums[0];
  for (let i = 1; i < n; i++) {
    dp1 = Math.max(dp1 + nums[i], nums[i]);
    max = Math.max(max, dp1);
    sum += nums[i];
    if (i < n - 1) {
      dp2 = Math.min(dp2 + nums[i], nums[i]);
      min = Math.min(min, dp2);
    }
  }
  return Math.max(max, sum - min);
};
// @lc code=end

