/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 0, 4);

  function kSum(nums, target, start, k) {
    if (nums[start] * k > target || nums[nums.length - 1] * k < target) {
      return [];
    }
    let ret = [];
    if (k === 2) return twoSum(nums, target, start);
    let n = nums.length;
    for (let i = start; i <= n - k; i++) {
      if (i !== start && nums[i] === nums[i - 1]) continue;
      let arr = kSum(nums, target - nums[i], i + 1, k - 1);
      for (let item of arr) {
        item.unshift(nums[i]);
        ret.push(item);
      }
    }
    return ret;
  }
  
  function twoSum(nums, target, start) {
    let ret = [];
    let l = start, r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum === target) {
        ret.push([nums[l++], nums[r--]]);
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
    return ret;
  }
};
// @lc code=end
