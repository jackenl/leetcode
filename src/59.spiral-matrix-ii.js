/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  let index = 1;
  let left = 0, right = n - 1;
  let top = 0, bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = index++;
    }
    for (let j = top + 1; j <= bottom; j++) {
      matrix[j][right] = index++;
    }
    for (let i = right - 1; i > left; i--) {
      matrix[bottom][i] = index++;
    }
    for (let j = bottom; j > top; j--) {
      matrix[j][left] = index++;
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return matrix;
};
// @lc code=end
