/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0;
  let left = 0, right = height.length - 1;
  let maxLeft = 0, maxRight = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) maxLeft = height[left];
      else ans += (maxLeft - height[left]);
      left++;
    } else {
      if (height[right] >= maxRight) maxRight = height[right];
      else ans += (maxRight - height[right]);
      right--;
    }
  }
  return ans;
};
// @lc code=end

