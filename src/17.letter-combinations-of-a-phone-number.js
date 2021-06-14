/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let strs = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let ans = [];
  let n = digits.length;
  dfs(digits, n, [], 0);
  return ans;

  function dfs(digits, n, list, cur) {
    if (cur === n) {
      ans.push(list.join(''));
      return;
    }
    let index = parseInt(digits[cur]) - 2;
    for (let c of strs[index]) {
      list.push(c);
      dfs(digits, n, list, cur + 1);
      list.pop();
    }
  }
};
// @lc code=end
