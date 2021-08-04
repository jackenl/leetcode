/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length;
  let dp1 = dp2 = s[0] > 0 ? 1 : 0;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    temp = 0;
    if (s[i] > 0) {
      temp += dp2;
    }
    if (s[i - 1] > 0 && s.substr(i - 1, 2) <= 26) {
      temp += dp1;
    }
    dp1 = dp2;
    dp2 = temp;
  }
  return dp2;
};
// @lc code=end

