/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];
  let ans = [];
  dfs(n, [], 0, 0, 0);
  return ans;

  function dfs(n, list, index, open, close) {
    if (index === n * 2) {
      ans.push(list.join(''));
      return
    }
    if (open < n) {
      list.push('(');
      dfs(n, list, index + 1, open + 1, close);
      list.pop();
    }
    if (close < open) {
      list.push(')');
      dfs(n, list, index + 1, open, close + 1);
      list.pop();
    }
  }
};
// @lc code=end
