/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || head.next === null || k === 0) return head;

  let n = 1;
  let cur = head;
  while (cur.next !== null) {
    cur = cur.next;
    n++;
  }
  cur.next = head;
  let index = n - (k % n) - 1;
  while (index-- > 0) {
    head = head.next;
  }
  let nHead = head.next;
  head.next = null;
  return nHead;
};
// @lc code=end
