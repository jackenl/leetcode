/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let ans = 0;
  const n = s.length;
  for (let p = 1; p <= 26; p++) {
    const cnt = new Array(26).fill(0);
    let start = 0;
    let cat = 0, sum = 0;
    for (let i = 0; i < n; i++) {
      const u1 = s.charCodeAt(i) - 97;
      cnt[u1]++;
      if (cnt[u1] === 1) cat++;
      if (cnt[u1] === k) sum++;
      while (cat > p) {
        const u2 = s.charCodeAt(start) - 97;
        cnt[u2]--;
        if (cnt[u2] === 0) cat--;
        if (cnt[u2] === k - 1) sum--;
        start++;
      }
      if (cat === sum) ans = Math.max(ans, i - start + 1);
    }
  }
  return ans;
};
// @lc code=end

