/*
 * @lc app=leetcode id=1014 lang=javascript
 *
 * [1014] Best Sightseeing Pair
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  const n = values.length;
  let ans = 0, preMax = values[0];
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, preMax + values[i] - i);
    preMax = Math.max(preMax, values[i] + i);
  }
  return ans;
};
// @lc code=end

