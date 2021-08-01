/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const m = image.length, n = image[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let curColor = image[sr][sc];
  if (curColor !== newColor) {
    dfs(image, sr, sc, curColor, newColor);
  }
  return image;

  function dfs(image, x, y, color, newColor) {
    if (image[x][y] !== color) return;
    image[x][y] = newColor;
    for (let i = 0; i < 4; i++) {
      const nx = x + directions[i][0];
      const ny = y + directions[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        dfs(image, nx, ny, color, newColor);
      }
    }
  }
};
// @lc code=end

