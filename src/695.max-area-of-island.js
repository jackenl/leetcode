/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m = grid.length, n = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(grid, i, j));
    }
  }
  return ans;

  function dfs(grid, x, y) {
    if (grid[x][y] === 0) return 0;
    grid[x][y] = 0;
    let area = 1;
    for (let i = 0; i < 4; i++) {
      const nx = x + directions[i][0];
      const ny = y + directions[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        area += dfs(grid, nx, ny);
      }
    }
    return area;
  }
};
// @lc code=end

