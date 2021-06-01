/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let n = intervals.length;
  for (let i = 0; i < n; i++) {
    let l = intervals[i][0], r = intervals[i][1];
    while (i < n - 1 && intervals[i + 1][0] <= r) {
      r = Math.max(r, intervals[i + 1][1]);
      i++;
    }
    ans.push([l, r]);
  }
  return ans;
};
// @lc code=end
