/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  });
  if (sum < S || (sum + S) % 2 !== 0) {
    return 0;
  }
  let W = (sum + S) / 2;
  let dp = new Array(W + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= nums.length; i++) {
    let w = nums[i];
    for (let j = W; j >= w; j--) {
      dp[j] += dp[j - w];
    }
  }
  return dp[W];
};
// @lc code=end

