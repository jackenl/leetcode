/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const n = coins.length;
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const coin = coins[i - 1];
    for (let j = coin; j <= amount; j++) {
      dp[j] += dp[j - coin];
    }
  }
  return dp[amount];
};
// @lc code=end

function main() {
  const ans = change(5, [1,2,5]);
  console.log(ans);
}
main();
