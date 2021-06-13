/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length === 0) return [];
  let ans = [];
  let n = candidates.length;
  dfs(candidates, n, target, [], 0);
  return ans;

  function dfs(candidates, n, target, list, start) {
    if (target < 0) return;
    if (target === 0) {
      ans.push(list.slice());
      return;
    }
    for (let i = start; i < n; i++) {
      list.push(candidates[i]);
      dfs(candidates, n, target - candidates[i], list, i);
      list.pop();
    }
  }
};
// @lc code=end
