/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0;
  let start = 0;
  const map = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const val = s.charAt(i);
    if (map.has(val)) {
      start = Math.max(start, map.get(val) + 1);
    }
    ans = Math.max(ans, i - start + 1);
    map.set(val, i);
  }
  return ans;
};
// @lc code=end

