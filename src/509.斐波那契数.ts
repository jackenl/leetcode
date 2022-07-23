/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
    if (n < 2) return n;
    let f1 = 0, f2 = 1;
    for (let i = 2; i <= n; i++) {
        const temp = f1 + f2;
        f1 = f2;
        f2 = temp;
    }
    return f2;
};
// @lc code=end

