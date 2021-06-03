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
  let arr = [];
  let n = nums.length;
  helper(0, nums, n);
  return ans;

  function helper(cur, nums, n) {
    if (cur === n) {
      ans.push([].concat(arr));
      return;
    }
    arr.push(nums[cur]);
    helper(cur + 1, nums, n); // 选择当前位置
    arr.pop();
    helper(cur + 1, nums, n); // 不选择当前位置
  }
};
// @lc code=end

