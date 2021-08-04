/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const m = mat.length, n = mat[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dirs[i][0], ny = y + dirs[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] === -1) {
        mat[nx][ny] = mat[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return mat;
};
// @lc code=end

