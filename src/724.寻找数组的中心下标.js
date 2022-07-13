/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
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
};
// @lc code=end

