/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = [];
  const n = nums.length;
  dfs(nums, n, 0);
  return ans;

  function dfs(nums, n, index) {
    if (index === n) {
      ans.push([].concat(nums));
      return;
    }
    for (let i = index; i < n; i++) {
      swap(nums, index, i);
      dfs(nums, n, index + 1);
      swap(nums, index, i);
    }
  }

  function swap(nums, x, y) {
    if (x === y) return;
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  }
};
// @lc code=end

