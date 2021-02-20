/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.reduce((pre, cur) => {
    return Math.max(pre, cur);
  }, 0);
};
// @lc code=end

// dp[i] 表示以索引为 i 元素为结尾的最长递增子序列长度
// dp[0] = 1
// dp[i] = max{1, dp[j]+1 | S[j] < S[i] && j < i}