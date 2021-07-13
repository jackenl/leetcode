/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let ans = Number.MAX_SAFE_INTEGER;
  let start = 0, end = 0;
  let sum = 0;
  const n = nums.length;
  while (end < n) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};
// @lc code=end

