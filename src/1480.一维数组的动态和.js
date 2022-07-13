/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
// @lc code=end

