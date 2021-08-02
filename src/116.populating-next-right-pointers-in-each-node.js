/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) return null;
  
  let cur = root, pre = null;
  while (cur.left !== null) {
    pre = cur;
    while (pre !== null) {
      pre.left.next = pre.right;
      if (pre.next !== null) {
        pre.right.next = pre.next.left;
      }
      pre = pre.next;
    }
    cur = cur.left;
  }
  return root;
};
// @lc code=end

