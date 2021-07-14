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
var merge = function(intervals) {
  const ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  ans.push(intervals[0]);
  let index = 0;
  const n = intervals.length;
  for (let i = 1; i < n; i++) {
    const cur = intervals[i];
    const last = ans[index];
    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      ans.push(cur);
      index++;
    }
  }
  return ans;
};
// @lc code=end
