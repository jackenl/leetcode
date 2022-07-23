/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
    const dp = new Array(n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[j] = 1;
            } else {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
};
// @lc code=end

