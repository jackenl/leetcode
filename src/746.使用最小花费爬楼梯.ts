/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    let dp1 = 0, dp2 = 0;
    for (let i = 2; i <= n; i++) {
        const temp = Math.min(dp1 + cost[i - 2], dp2 + cost[i - 1]);
        dp1 = dp2;
        dp2 = temp;
    }
    return dp2;
};
// @lc code=end

