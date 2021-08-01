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
  if (prices.length < 2) return 0;
  let minPrices = prices[0];
  let max = 0;
  for (let i = 1; i < n; i++) {
    minPrices = Math.min(minPrices, prices[i]);
    max = Math.max(max, prices[i] - minPrices);
  }
  return max;
};
// @lc code=end

