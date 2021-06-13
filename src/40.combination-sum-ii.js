/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) return [];
  let ans = [];
  candidates.sort((a, b) => a - b);
  let n = candidates.length;
  dfs(candidates, n, target, [], 0);
  return ans;

  function dfs(candidates, n, target, list, start) {
    if (target === 0) {
      ans.push(list.slice());
      return;
    }
    for (let i = start; i < n; i++) {
      if (target - candidates[i] < 0) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      list.push(candidates[i]);
      dfs(candidates, n, target - candidates[i], list, i + 1);
      list.pop();
    }
  }
};
// @lc code=end

