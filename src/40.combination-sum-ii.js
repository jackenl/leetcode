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
  let ret = [];
  candidates.sort((a, b) => a - b);
  dfs(candidates, target, [], 0);
  return ret;
  
  function dfs(candidates, target, combine, index) {
    if (target === 0) {
      ret.push(combine);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (target < 0) break;
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      let arr = [...combine, candidates[i]];
      dfs(candidates, target - candidates[i], arr, i + 1);
    }
  }
};
// @lc code=end

