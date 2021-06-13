/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length, n = board[0].length;
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(board, word, visited, i, j, 0)) {
        return true;
      }
    }
  }
  return false;

  function check(board, word, visited, x, y, k) {
    if (board[x][y] !== word[k]) {
      return false;
    } else if (k === word.length - 1) {
      return true;
    }
    visited[x][y] = 1;
    for (let dir of directions) {
      let newX = x + dir[0], newY = y + dir[1];
      if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY]) {
        if (check(board, word, visited, newX, newY, k + 1)) {
          return true;
        }
      }
    }
    visited[x][y] = 0;
    return false;
  }
};
// @lc code=end

