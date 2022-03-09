/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  const n = salary.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += salary[i];
    if (salary[i] < min) {
      min = salary[i];
    }
    if (salary[i] > max) {
      max = salary[i];
    }
  }
  return (sum - min - max) / (n - 2);
};
// @lc code=end

