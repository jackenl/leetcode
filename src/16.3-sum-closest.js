/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let closest = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = n - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (sum < target) {
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      } else {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return closest;
};
// @lc code=end

