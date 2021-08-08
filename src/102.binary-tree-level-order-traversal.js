/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  const ans = [];
  const queue = [root];
  let cur = null;
  while (queue.length > 0) {
    const size = queue.length;
    const arr = [];
    for (let i = 0; i < size; i++) {
      cur = queue.shift();
      arr.push(cur.val);
      if (cur.left !== null) queue.push(cur.left);
      if (cur.right !== null) queue.push(cur.right);
    }
    ans.push(arr);
  }
  return ans;
};
// @lc code=end

