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
  const n = s.length;
  let res = 0;
  const set = new Set();
  let left = 0, right = 0;
  while (right < n) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};
// @lc code=end

