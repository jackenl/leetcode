/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sums = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  if (sums % 2 !== 0) {
    return false;
  }
  let W = sums / 2;
  let dp = new Array(W + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= nums.length; i++) {
    let w = nums[i];
    for (let j = W; j >= w; j--) {
      dp[j] = dp[j] || dp[j - w];
    }
  }
  return dp[W];
};
// @lc code=end

