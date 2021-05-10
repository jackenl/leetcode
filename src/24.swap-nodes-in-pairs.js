/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let nHead = new ListNode(0);
  nHead.next = head;
  let cur = nHead;
  while (cur.next !== null && cur.next.next !== null) {
    let node1 = cur.next, node2 = cur.next.next;
    let next = node2.next;
    node2.next = node1;
    node1.next = next;
    cur.next = node2;
    
    cur = node1;
  }
  return nHead.next;
};
// @lc code=end

