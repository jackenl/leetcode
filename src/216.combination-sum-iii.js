/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k === 0 || n === 0) return [];
  let ans = [];
  dfs(k, n, [], 1, 0);
  return ans;
  
  function dfs(k, n, list, cur, index) {
    if (index > k) return;
    if (n === 0 && index === k) {
      ans.push(list.slice());
      return;
    }
    for (let i = cur; i <= 9; i++) {
      if (n - i < 0) break;
      list.push(i);
      dfs(k, n - i, list, i + 1, index + 1);
      list.pop();
    }
  }
};
// @lc code=end

