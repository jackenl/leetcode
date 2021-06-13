/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 0) return [];
  let ans = [];
  nums.sort((a, b) => a - b);
  n = nums.length;
  let visited = new Array(n).fill(0);
  dfs(nums, n, visited, [], 0);
  return ans;

  function dfs(nums, n, visited, list, index) {
    if (index === n) {
      ans.push(list.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) continue;
      visited[i] = 1;
      list.push(nums[i]);
      dfs(nums, n, visited, list, index + 1);
      visited[i] = 0;
      list.pop();
    }
  }
};
// @lc code=end

