/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    const n = s.length;
    const m = t.length;
    let i = 0,
        j = 0;
    // 贪心匹配
    while (i < n && j < m) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === n;
}
// @lc code=end
