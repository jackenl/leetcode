/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 1; i * i <= n; i++) {
    const num = i * i;
    for (let j = num; j <= n; j++) {
      if (j === num) {
        dp[j] = 1;
      } else {
        dp[j] = Math.min(dp[j], dp[j - num] + 1);
      }
    }
  }
  return dp[n];
};
// @lc code=end

function main() {
  const ans = numSquares(12);
  console.log(ans);
}
main();
