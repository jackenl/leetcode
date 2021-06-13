/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) return [];
  let ans = [];
  let n = nums.length;
  dfs(nums, n, [], 0);
  return ans;

  function dfs(nums, n, list, cur) {
    if (cur === n) {
      ans.push(list.slice());
      return;
    }
    dfs(nums, n, list, cur + 1);
    list.push(nums[cur]);
    dfs(nums, n, list, cur + 1);
    list.pop();
  }
};
// @lc code=end

