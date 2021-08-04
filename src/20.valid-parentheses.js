/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const n = s.length;
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i = 0; i < n; i++) {
    if (pairs[s[i]]) {
      let len = stack.length;
      if (len === 0 || stack[len - 1] !== pairs[s[i]]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end

