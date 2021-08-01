/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const m = ransomNote.length, n = magazine.length;
  const a = 'a'.charCodeAt();
  const arr = new Array(26).fill(0);
  for (let i = 0; i < m; i++) {
    arr[ransomNote[i].charCodeAt() - a]++;
  }
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (arr[magazine[j].charCodeAt() - a]) {
      arr[magazine[j].charCodeAt() - a]--;
      count++;
    }
  }
  return count === m;
};
// @lc code=end

