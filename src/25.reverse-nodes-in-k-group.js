/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
var reverseKGroup = function (head, k) {
  let nHead = new ListNode(0, head);
  nHead.next = head;
  let pre = nHead, end = nHead;

  while (end.next !== null) {
    for (let i = 0; i < k && end !== null; i++) end = end.next;
    if (end === null) break;
    let start = pre.next;
    let next = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = next;
    pre = start;
    end = pre;
  }
  return nHead.next;

  function reverse(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
};
// @lc code=end
