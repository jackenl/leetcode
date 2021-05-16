/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);

  function mergeTwoList(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let head = new ListNode(0);
    let cur = head;
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 !== null ? l1 : l2;
    return head.next;
  }

  function merge(lists, left, right) {
    if (left === right) return lists[left];
    if (left > right) return null;
    let mid = (left + right) >> 1;
    return mergeTwoList(merge(lists, left, mid), merge(lists, mid + 1, right));
  }
};
// @lc code=end
