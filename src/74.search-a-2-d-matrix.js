/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let i = 0;
  while (i < m && matrix[i][n - 1] < target) {
    i++;
  }
  if (i === m) return false;
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] > target) break;
    if (matrix[i][j] === target) return true;
  }
  return false;
};
// @lc code=end

