/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    if (prices.length === 0) return 0;
    const n = prices.length;
    // dp1 表示在 i 天不持有股票的最大利润，dp2 表示在 i 天持有股票的最大利润
    let dp1 = 0;
    let dp2 = -prices[0];
    for (let i = 1; i < n; i++) {
        dp1 = Math.max(dp1, dp2 + prices[i]);
        dp2 = Math.max(dp2, -prices[i]);
    }
    return dp1;
}
// @lc code=end
