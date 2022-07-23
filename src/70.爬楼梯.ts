/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    if (n <= 2) return n;
    let dp1 = 1, dp2 = 2;
    for (let i = 2; i < n; i++) {
        const temp = dp1 + dp2;
        dp1 = dp2;
        dp2 = temp;
    }
    return dp2;
};
// @lc code=end

