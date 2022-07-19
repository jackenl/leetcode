/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
    const cnts = new Array(256).fill(0);
    const n = s.length;
    let max = 0;
    // 计算每个字母出现的次数
    for (let i = 0; i < n; i++) {
        cnts[s.charCodeAt(i)]++;
    }
    // 最大偶数回文长度等于所有字母出现的最大偶数次数的和
    for (const cnt of cnts) {
        max += Math.floor(cnt / 2) * 2;
    }
    // max 小于 n，最大回文长度为奇数 max + 1
    if (max < n) max += 1;
    return max;
}
// @lc code=end
