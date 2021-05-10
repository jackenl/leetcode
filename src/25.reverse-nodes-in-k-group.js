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
var reverseKGroup = function(head, k) {
  let list = new ListNode(0);
  let pre = list;
  reverseKList(head, k);
  return list.next;

  function reverseKList(head, k) {
    if (head === null) return;
    let nHead = new ListNode(0);
    let cur = head;
    let i = 0;
    while (i++ < k) {
      if (cur === null) {
        pre.next = reverse(nHead.next);
        return;
      }
      let next = cur.next;
      cur.next = nHead.next;
      nHead.next = cur;
      cur = next;
    }
    pre.next = nHead.next;
    pre = head;
    reverseKList(cur, k);
  }

  function reverse(head) {
    if (head == null || head.next == null) return head;
    
    let next = head.next;
    let newHead = reverse(next);
    next.next = head;
    head.next = null;
    return newHead;
  }
};
// @lc code=end

