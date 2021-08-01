/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const n = nums.length;
  let p1 = 0, p2 = nums[0];
  for (let i = 1; i < n; i++) {
    const temp = p2;
    p2 = Math.max(p2, p1 + nums[i]);
    p1 = temp;
  }
  return p2;
};
// @lc code=end

