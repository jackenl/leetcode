/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return 0;
  let orders = [];
  let m = matrix.length,
    n = matrix[0].length;
  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      orders.push(matrix[top][i]);
    }
    for (let j = top + 1; j <= bottom; j++) {
      orders.push(matrix[j][right]);
    }
    if (top < bottom && left < right) {
      for (let i = right - 1; i > left; i--) {
        orders.push(matrix[bottom][i]);
      }
      for (let j = bottom; j > top; j--) {
        orders.push(matrix[j][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return orders;
};
// @lc code=end
