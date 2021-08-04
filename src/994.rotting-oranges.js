/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const m = grid.length, n = grid[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [];
  let count = 0, total = 0;
  let time = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) total++;
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        count++;
      }
    }
  }
  while (queue.length > 0) {
    if (count === total) return time;
    const len = queue.length;
    for (let k = 0; k < len; k++) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dirs[i][0], ny = y + dirs[i][1];
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          queue.push([nx, ny]);
          grid[nx][ny] = 2;
          count++;
        }
      }
    }
    time++;
  }
  return total > 0 ? -1 : 0;
};
// @lc code=end

