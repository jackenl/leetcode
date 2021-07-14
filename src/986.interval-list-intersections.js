/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const m = firstList.length, n = secondList.length;
  const ans = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    const [start1, end1] = firstList[i];
    const [start2, end2] = secondList[j];
    if (end2 >= start1 && end1 >= start2) {
      ans.push([Math.max(start1, start2), Math.min(end1, end2)]);
    }
    if (end2 < end1) j++;
    else i++;
  }
  return ans;
};
// @lc code=end

