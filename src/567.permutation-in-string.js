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
  const n1 = s1.length, n2 = s2.length;
  const map = new Map();
  for (let i = 0; i < n1; i++) {
    const cnt = map.get(s1[i]) || 0;
    map.set(s1[i], cnt + 1);
  }
  let left = 0, right = 0;
  while (right < n2) {
    const cnt = (map.get(s2[right]) || 0);
    if (cnt === 0) {
      while (s2[left] !== s2[right]) {
        map.set(s2[left], map.get(s2[left]) + 1);
        left++;
      }
      left++;
    } else {
      map.set(s2[right], cnt - 1);
    }
    if (right - left + 1 === n1) return true;
    right++;
  }
  return false;
};
// @lc code=end

