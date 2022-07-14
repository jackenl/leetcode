/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const n = s.length;
  const map = new Map();
  const set = new Set();
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      // s[i] 存在多个映射值，不符合
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      // t[i] 存在多个映射值，不符合
      if (set.has(t[i])) return false;
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }
  return true;
};
// @lc code=end
