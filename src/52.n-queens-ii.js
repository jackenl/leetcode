/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const cols = new Set();
  const diags1 = new Set();
  const diags2 = new Set();

  const helper = (n, row) => {
    if (row === n) {
      return 1;
    }
    let count = 0;
    for (let col = 0; col < n; col++) {
      const diag1 = row + col;
      const diag2 = row - col;
      if (!cols.has(col) && !diags1.has(diag1) && !diags2.has(diag2)) {
        cols.add(col);
        diags1.add(diag1);
        diags2.add(diag2);
        count += helper(n, row + 1);
        cols.delete(col);
        diags1.delete(diag1);
        diags2.delete(diag2);
      }
    }
    return count;
  }

  return helper(n, 0);
};
// @lc code=end

