/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  let dp1 = 0, dp2 = -prices[0];
  for (let i = 1; i < n; i++) {
    dp1 = Math.max(dp1, dp2 + prices[i]);
    dp2 = Math.max(dp2, -prices[i]);
  }
  return dp1;
};
// @lc code=end

