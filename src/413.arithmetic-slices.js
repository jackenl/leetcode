/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length;
  if (n < 3) return 0;
  let ans = 0;
  let dp = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp += 1;
      ans += dp;
    } else {
      dp = 0;
    }
  }
  return ans;
};
// @lc code=end

