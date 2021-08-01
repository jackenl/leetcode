/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const grids = new Array(9).fill(0).map(() => new Array(9).fill(0));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cur = board[i][j];
      if (cur === '.') continue;
      const index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i][cur] || cols[j][cur] || grids[index][cur]) {
        return false;
      }
      rows[i][cur] = 1;
      cols[j][cur] = 1;
      grids[index][cur] = 1;
    }
  }
  return true;
};
// @lc code=end

