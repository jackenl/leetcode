/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (root === null) return false;
  const set = new Set();
  const queue = [root];
  let cur = null;
  while (queue.length > 0) {
    cur = queue.shift();
    if (set.has(k - cur.val)) return true;
    set.add(cur.val);
    if (cur.left !== null) queue.push(cur.left);
    if (cur.right !== null) queue.push(cur.right);
  }
  return false;
};
// @lc code=end

