/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;
  let p1 = 0, p2 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = p1 + p2;
    p1 = p2;
    p2 = temp;
  }
  return p2;
};
// @lc code=end

