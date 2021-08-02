/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  let dp0 = -prices[0];
  let dp1 = 0, dp2 = 0;
  for (let i = 1; i < n; i++) {
    let newDp0 = Math.max(dp0, dp2 - prices[i]);
    let newDp1 = dp0 + prices[i];
    let newDp2 = Math.max(dp2, dp1);
    dp0 = newDp0;
    dp1 = newDp1;
    dp2 = newDp2;
  }
  return Math.max(dp1, dp2);
};
// @lc code=end

