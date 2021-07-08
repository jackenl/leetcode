/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0, minLen = Number.MAX_SAFE_INTEGER;
  let left = 0, right = 0;
  const needs = new Array(128).fill(0);
  const window = new Array(128).fill(0);
  const n1 = s.length, n2 = t.length;
  let matches = 0;
  let count = 0;
  for (let i = 0; i < n2; i++) {
    const index = t.charCodeAt(i);
    if (!needs[index]) count++;
    needs[index]++;
  }
  while (right < n1) {
    const c1 = s.charCodeAt(right);
    if (!needs[c1]) {
      right++;
      continue;
    }
    window[c1]++;
    if (window[c1] === needs[c1]) matches++;
    while (matches === count) {
      const len = right - left + 1;
      if (len < minLen) {
        start = left;
        minLen = len;
      }
      const c2 = s.charCodeAt(left);
      if (!needs[c2]) {
        left++;
        continue;
      }
      window[c2]--;
      if (window[c2] < needs[c2]) matches--;
      left++;
    }
    right++;
  }
  return minLen !== Number.MAX_SAFE_INTEGER ? s.substr(start, minLen) : '';
};
// @lc code=end

