/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  helper(nums, [], 0);
  return ans;

  function helper(nums, arr, cur, include) {
    if (cur === nums.length) {
      ans.push(arr.slice());
      return;
    }
    helper(nums, arr, cur + 1, false);
    if (!include && cur > 0 && nums[cur] === nums[cur - 1]) return;
    arr.push(nums[cur]);
    helper(nums, arr, cur + 1, true);
    arr.pop();
  }
};
// @lc code=end
