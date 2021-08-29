/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  if (root === null) return 0;
  let ans = 0;
  dfs(root, root.val, root.val);
  return ans;

  function dfs(root, max, min) {
    if (root === null) return;
    max = Math.max(max, root.val);
    min = Math.min(min, root.val);
    ans = Math.max(ans, max - min);
    dfs(root.left, max, min);
    dfs(root.right, max, min);
  }
};
// @lc code=end

