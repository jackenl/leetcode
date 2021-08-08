/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const list = s.split('');
  const n = list.length;
  const ans = [];
  dfs(list, n, 0);
  return ans;

  function dfs(list, n, start) {
    ans.push(list.join(''));
    for (let i = start; i < n; i++) {
      if (!isDigit(list[i])) {
        let temp = list[i];
        list[i] = list[i] >= 'a'
          ? String.fromCharCode(list[i].charCodeAt() - 32)
          : String.fromCharCode(list[i].charCodeAt() + 32);
        dfs(list, n, i + 1);
        list[i] = temp;
      }
    }
  }

  function isDigit(val) {
    return val >= 0 && val <= 9;
  }
};
// @lc code=end

