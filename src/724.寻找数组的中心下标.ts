/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    const total = nums.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (total === sum * 2 + nums[i]) return i;
        sum += nums[i];
    }
    return -1;
}
// @lc code=end
