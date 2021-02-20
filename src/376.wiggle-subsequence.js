/*
 * @lc app=leetcode id=376 lang=javascript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let n = nums.length;
  let dp = Array(n).fill(0).map(() => Array(2).fill(1));
  dp[0][0] = 1, dp[0][1] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      } else if (nums[j] > nums[i]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      }
    }
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1]);
};
// @lc code=end

