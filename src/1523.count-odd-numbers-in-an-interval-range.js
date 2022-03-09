/*
 * @lc app=leetcode id=1523 lang=javascript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  const count = Math.floor((high - low)  / 2);
  return (low % 2 === 0 && high % 2 === 0) ? count : count + 1;
};
// @lc code=end

