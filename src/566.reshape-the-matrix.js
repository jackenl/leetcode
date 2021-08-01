/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  const m = mat.length, n = mat[0].length;
  if (m * n !== r * c) return mat;
  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let i = 0; i < m * n; i++) {
    ans[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return ans;
};
// @lc code=end

