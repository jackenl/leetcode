/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const m = s.length, n = t.length;
  if (m !== n) return false;
  const arr = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  for (let i = 0; i < m; i++) {
    arr[s[i].charCodeAt() - a]++;
  }
  for (let j = 0; j < n; j++) {
    const index = t[j].charCodeAt() - a;
    arr[index]--;
    if (arr[index] < 0) return false;
  }
  return true;
};
// @lc code=end

