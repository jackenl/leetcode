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
var combinationSum = function(candidates, target) {
  const ret = [];
  dfs(candidates, target, [], 0);
  return ret;

  function dfs(candidates, target, combine, index) {
    if (target < 0) return;

    if (target === 0) {
      ret.push(combine);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      let arr = [...combine, candidates[i]];
      dfs(candidates, target - candidates[i], arr, i);
    }
  }
};
// @lc code=end

