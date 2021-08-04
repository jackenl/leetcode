/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
  if (root === null) return [];
  const ans = [];
  const stack = [];
  let cur = root, pre = null;
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack[stack.length - 1];
    if (cur.right === null || cur.right === pre) {
      stack.pop();
      ans.push(cur.val);
      pre = cur;
      cur = null;
    } else {
      cur = cur.right;
    }
  }
  return ans;
};
// @lc code=end

