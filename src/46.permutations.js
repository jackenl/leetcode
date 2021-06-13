/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return [];
  let ans = [];
  let n = nums.length;
  let visited = new Array(n).fill(0);
  dfs(nums, n, visited, [], 0);
  return ans;

  function dfs(nums, n, visited, list, index) {
    if (index === n) {
      ans.push(list.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] === 1) continue;
      visited[i] = 1;
      list.push(nums[i]);
      dfs(nums, n, visited, list, index + 1);
      visited[i] = 0;
      list.pop();
    }
  }
};
// @lc code=end

