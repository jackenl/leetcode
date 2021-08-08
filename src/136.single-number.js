/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    ret ^= nums[i];;
  }
  return ret;
};
// @lc code=end

