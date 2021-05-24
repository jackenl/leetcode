/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let i = 0; j = height.length - 1;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
// @lc code=end

