/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const n = nums.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 1; j <= n; j++) {
      const num = nums[j - 1];
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};
// @lc code=end

function main() {
  const ans = combinationSum4([1,2,3], 4);
  console.log(ans);
}
main();
