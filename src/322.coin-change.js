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
  if (amount === 0) return 0;
  const n = coins.length;
  const dp = new Array(amount + 1).fill(Infinity);
  for (let i = 1; i <= n; i++) {
    const coin = coins[i - 1];
    for (let j = coin; j <= amount; j++) {
      if (j === coin) {
        dp[j] = 1;
      } else {
        dp[j] = Math.min(dp[j], dp[j - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

function main() {
  const ans = coinChange([1,2,5], 11);
  console.log(ans);
}
main();
