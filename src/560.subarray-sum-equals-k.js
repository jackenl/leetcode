/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let ans = 0;
  const preSum = new Map();
  preSum.set(0, 1);
  const n = nums.length;
  let sum_i = 0, sum_j = 0;
  for (let i = 0; i < n; i++) {
    sum_i += nums[i];
    sum_j = sum_i - k;
    if (preSum.has(sum_j)) {
      ans += preSum.get(sum_j);
    }
    preSum.set(sum_i, (preSum.get(sum_i) || 0) + 1);
  }
  return ans;
};
// @lc code=end

