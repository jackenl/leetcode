/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const ans = [];
  let left = 0, right = 0;
  const needs = new Map();
  const window = new Map();
  for (let c of p) {
    const val = (needs.get(c) || 0) + 1;
    needs.set(c, val);
  }
  let matches = 0;
  const n1 = s.length, n2 = p.length;
  while (right < n1) {
    const c1 = s.charAt(right);
    if (needs.has(c1)) {
      const val1 = (window.get(c1) || 0) + 1;
      window.set(c1, val1);
      if (val1 === needs.get(c1)) matches++;
    }
    while (matches === needs.size) {
      const len = right - left + 1;
      if (len === n2) {
        ans.push(left);
      }
      const c2 = s.charAt(left);
      if (needs.has(c2)) {
        const val2 = window.get(c2) - 1;
        window.set(c2, val2);
        if (val2 < needs.get(c2)) matches--;
      }
      left++;
    }
    right++;
  }
  return ans;
};
// @lc code=end

