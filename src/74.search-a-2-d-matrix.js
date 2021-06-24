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
  let left = 0, right = n - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (matrix[i][mid] === target) return true;
    if (matrix[i][mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end

