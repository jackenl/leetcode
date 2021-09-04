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
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  const target = (sum + S) / 2;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = target; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[target];
};
// @lc code=end

function main() {
  const ans = findTargetSumWays([1,1,1,1,1], 3);
  console.log(ans);
}
main();
