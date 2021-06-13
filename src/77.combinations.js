/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n === 0 || k === 0) return [];
  let ans = [];
  dfs(n, k, [], 1, 0);
  return ans;

  function dfs(n, k, list, start, index) {
    if (k === index) {
      ans.push(list.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      list.push(i);
      dfs(n, k, list, i + 1, index + 1);
      list.pop();
    }
  }
};
// @lc code=end

