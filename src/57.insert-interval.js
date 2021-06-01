/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let ans = [];
  let n = intervals.length;
  let i = 0;
  while (i < n && intervals[i][0] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }
  let right = 0;
  if (i === 0 || ans[i - 1][1] < newInterval[0]) {
    ans.push(newInterval);
    right = newInterval[1];
  } else {
    right = Math.max(ans[i - 1][1], newInterval[1]);
    ans[i - 1][1] = right;
  }
  while (i < n) {
    if (right < intervals[i][0]) {
      ans.push(intervals[i]);
      right = intervals[i][1];
    } else {
      right = Math.max(right, intervals[i][1]);
      ans[ans.length - 1][1] = right;
    }
    i++;
  }
  return ans;
};
// @lc code=end
