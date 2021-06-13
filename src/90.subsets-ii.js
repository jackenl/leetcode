/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (nums.length === 0) return [];
  let ans = [];
  nums.sort((a, b) => a - b);
  let n = nums.length;
  dfs(nums, n, [], 0, false);
  return ans;

  function dfs(nums, n, list, index, include) {
    if (index === n) {
      ans.push(list.slice());
      return;
    }
    dfs(nums, n, list, index + 1, false);
    if (index > 0 && nums[index] === nums[index - 1] && !include) return;
    list.push(nums[index]);
    dfs(nums, n, list, index + 1, true);
    list.pop();
  }
};
// @lc code=end
