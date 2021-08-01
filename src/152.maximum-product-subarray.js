/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const n = nums.length;
  let ans = nums[0];
  let maxPre = nums[0], minPre = nums[0];
  for (let i = 1; i < n; i++) {
    let max = maxPre, min = minPre;
    maxPre = Math.max(nums[i] * max, Math.max(nums[i], nums[i] * min));
    minPre = Math.min(nums[i] * min, Math.min(nums[i], nums[i] * max));
    ans = Math.max(ans, maxPre);
  }
  return ans;
};
// @lc code=end

