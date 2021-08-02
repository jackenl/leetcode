/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const n = prices.length;
  let dp1 = 0, dp2 = -prices[0];
  for (let i = 1; i < n; i++) {
    let newDp1 = Math.max(dp1, dp2 + prices[i] - fee);
    let newDp2 = Math.max(dp2, dp1 - prices[i]);
    dp1 = newDp1;
    dp2 = newDp2;
  }
  return dp1;
};
// @lc code=end

