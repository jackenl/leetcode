/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const sums = new Array(nums[n - 1] + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const val = nums[i];
    sums[val] += val;
  }
  return rob(sums);
  
  function rob(sums) {
    const n = sums.length;
    let p1 = sums[0];
    let p2 = Math.max(sums[0], sums[1]);
    for (let i = 2; i < n; i++) {
      const temp = p2;
      p2 = Math.max(p1 + sums[i], p2);
      p1 = temp;
    }
    return p2;
  }
};
// @lc code=end

