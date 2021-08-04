/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) return [];
  const ans = [];
  const stack = [root];
  let cur = null;
  while (stack.length > 0) {
    cur = stack.pop();
    ans.push(cur.val);
    if (cur.right !== null) stack.push(cur.right);
    if (cur.left !== null) stack.push(cur.left);
  }
  return ans;
};
// @lc code=end

