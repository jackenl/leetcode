/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const n = s.length;
  const arr = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  for (let i = 0; i < n; i++) {
    arr[s[i].charCodeAt() - a]++;
  }
  for (let i = 0; i < n; i++) {
    if (arr[s[i].charCodeAt() - a] === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

