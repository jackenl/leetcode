/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  const ans = [];

  const cols = new Set();
  const diags1 = new Set();
  const diags2 = new Set();

  const helper = (board, n, row) => {
    if (row === n) {
      const newBoard = new Array(n);
      for (let i = 0; i < n; i++) {
        newBoard[i] = board[i].join('');
      }
      ans.push(newBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      const diag1 = row + col;
      const diag2 = row - col;
      if (!cols.has(col) && !diags1.has(diag1) && !diags2.has(diag2)) {
        board[row][col] = 'Q';
        cols.add(col);
        diags1.add(diag1);
        diags2.add(diag2);
        helper(board, n, row + 1);
        board[row][col] = '.';
        cols.delete(col);
        diags1.delete(diag1);
        diags2.delete(diag2);
      }
    }
  }

  helper(board, n, 0);
  return ans;
};
// @lc code=end
