/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const m = s1.length, n = s2.length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }
  let left = 0, right = 0;
  while (right < n) {
    map.set(s2[right], (map.get(s2[right]) || 0) - 1);
    while (map.get(s2[right]) < 0) {
      map.set(s2[left], map.get(s2[left]) + 1);
      left++;
    }
    right++;
    if (right - left === m) return true;
  }
  return false;
};
// @lc code=end

