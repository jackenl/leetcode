/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let ans = 0;
  let left = 0, right = x;
  while (left <= right) {
    let mid = (left + right) >> 1;
    let pow = mid * mid;
    if (pow === x) return mid;
    if (pow < x ) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = right;
    }
  }
  return ans;
};
// @lc code=end

