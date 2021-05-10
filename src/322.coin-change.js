/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (coins.length === 0 || amount === 0) {
    return 0;
  }
  let n = coins.length;
  let dp = Array(amount + 1).fill(0);
  for (let i = 0; i < n; i++) {
    let coin = coins[i];
    for (let j = coin; j <= amount; j++) {
      if (j === coin) {
        dp[j] = 1;
      } else if (dp[j] === 0 && dp[j - coin] !== 0) {
        dp[j] = dp[j - coin] + 1;
      } else if (dp[j - coin] !== 0) {
        dp[j] = Math.min(dp[j], dp[j - coin] + 1);
      }
    }
  }

  return dp[amount] === 0 ? -1 : dp[amount];
};
// @lc code=end

