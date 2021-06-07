/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ans = [];
  helper(nums, [], 0);
  return ans;

  function helper(nums, arr, cur) {
    if (cur === nums.length) {
      ans.push(arr.slice());
      return;
    }
    helper(nums, arr, cur + 1); // 跳过当前元素
    arr.push(nums[cur]);
    helper(nums, arr, cur + 1); // 选择当前元素
    arr.pop();
  }
};
// @lc code=end

