/*
 * @lc app=leetcode id=1567 lang=javascript
 *
 * [1567] Maximum Length of Subarray With Positive Product
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  const n = nums.length;
  let positive = nums[0] > 0 ? 1 : 0;
  let negative = nums[0] < 0 ? 1 : 0;
  let ans = positive;
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) {
      positive++;
      negative = negative > 0 ? negative + 1 : 0;
    } else if (nums[i] < 0) {
      const newPositive = negative > 0 ? negative + 1 : 0;
      const newNegative = positive + 1;
      positive = newPositive;
      negative = newNegative;
    } else {
      positive = 0;
      negative = 0;
    }
    ans = Math.max(ans, positive);
  }
  return ans;
};
// @lc code=end

