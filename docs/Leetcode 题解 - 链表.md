# Leetcode 题解 - 链表

## 1. 找出两个链表的交点

\160. Intersection of Two Linked Lists (Easy)

解题思路：

设链表 A 长度为 a + c，链表 B 长度为 b + c，其中 c 为尾部公共部分长度，可知 a + c + b = b + c + a；

代码实现：

```js
var getIntersectionNode = function(headA, headB) {
    let l1 = headA, l2 = headB;
    while (l1 !== l2) {
        l1 = l1 === null ? headB : l1.next;
        l2 = l2 === null ? headA : l2.next;
    }
    return l1;
};
```

## 2. 链表反转

\206. Reverse Linked List (Easy)

代码实现：

递归：

```js
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let next = head.next;
    let newHead = reverseList(next);
    next.next = head;
    head.next = null;
    return newHead;
};
```

头插法：

```js
var reverseList = function(head) {
    let newHead = new ListNode(-1);
    while (head !== null) {
        let next = head.next;
        head.next = newHead.next;
        newHead.next = head;
        head = next;
    }
    return newHead.next;
};
```

## 3. 归并两个有序的链表

\21. Merge Two Sorted Lists (Easy)

代码实现：

递归：

```js
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

迭代：

```js
var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode(-1);
    let p = newHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 === null ? l2 : l1;
    return newHead.next;
};
```

## 4. 从有序链表中删除重复节点

\83. Remove Duplicates from Sorted List (Easy)

代码实现：

递归：

```js
var deleteDuplicates = function(head) {
    if (head == null || head.next === null) {
        return head;
    }
    head.next = deleteDuplicates(head.next);
    return head.next.val === head.val ? head.next : head;
};
```

迭代：

```js
var deleteDuplicates = function(head) {
    let cur = head;
    while (cur !== null && cur.next !== null) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
```

## 5. 删除链表的倒数第 n 个节点

\83. Remove Duplicates from Sorted List (Easy)

解题思路：

首先令指针 fast 指向链表的第 n + 1 个节点，指针 slow 指向头节点，然后同时逐步往下移动两个指针，直到指针 fast 指向尾节点，slow 指针的下一个节点就是倒数第 n 个节点，移除该节点。

代码实现：

```js
var removeNthFromEnd = function(head, n) {
    let fast = head;
    while (n-- > 0) {
        fast = fast.next;
    }
    if (fast === null) return head.next;
    let slow = head;
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
```

## 6. 交换链表中的相邻结点

\24. Swap Nodes in Pairs (Medium)

代码实现：

```js
var swapPairs = function(head) {
    let node = new ListNode(-1);
    node.next = head;
    let cur = node;
    while (cur.next !== null && cur.next.next !== null) {
        let l1 = cur.next, l2 = cur.next.next;
        let next = l2.next;
        l1.next = next;
        l2.next = l1;
        cur.next = l2;
        
        cur = l1;
    }
    return node.next;
};
```

## 7. 链表求和

\445. Add Two Numbers II (Medium)

代码实现：

```js
var addTwoNumbers = function(l1, l2) {
    let stack1 = [], stack2 = [];
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let head = null, carry = 0;
    while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
        let sum = carry;
        sum += stack1.length === 0 ? 0 : stack1.pop();
        sum += stack2.length === 0 ? 0 : stack2.pop();
        let node = new ListNode(sum % 10);
        node.next = head;
        head = node;
        carry = Math.floor(sum / 10);
    }
    return head;
};
```

## 8. 回文链表

\234. Palindrome Linked List (Easy)

解题思路：

将链表平等分割，反转前半段，然后比较两半是否相等。

代码实现：

```js
var isPalindrome = function(head) {
    let fast = head, slow = head;
    let p = null, pre = null;
    while (fast !== null && fast.next !== null) {
        p = slow;
        fast = fast.next.next;
        slow = slow.next;
        p.next = pre;
        pre = p;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    while (slow !== null) {
        if (p.val !== slow.val) {
            return false;
        }
        p = p.next;
        slow = slow.next;
    }
    return true;
};
```

## 9. 分隔链表

\725. Split Linked List in Parts(Medium)

题目描述：把链表分隔成 k 部分，每部分的长度都应该尽可能相同，排在前面的长度应该大于等于后面的。

```js
var splitListToParts = function(root, k) {
    let n = 0;
    let cur = root;
    // 计算链表长度
    while (cur !== null) {
        n++;
        cur = cur.next;
    }
    let mod = n % k; // 剩余元素数量
    let size = Math.floor(n / k); // 每一部分至少包含数量
    cur = root;
    let ret = new Array(k).fill(null);
    for (let i = 0; cur !== null && i < k; i++) {
        ret[i] = cur;
        let curSize = size + (mod-- > 0 ? 1 : 0);
        for (let j = 0; j < curSize - 1; j++) {
            cur = cur.next;
        }
        let next = cur.next;
        cur.next = null;
        cur = next;
    }
    return ret;
};
```

## 10. 链表元素按奇偶聚集

\328. Odd Even Linked List (Medium)

解题思路：

逐个遍历链表节点，使odd指针永远都指向最后一个奇数节点，使even指针永远都指向最后一个偶数节点，分别构成奇数集和偶数集两条链表，连接两条链表。

代码实现：

```js
var oddEvenList = function(head) {
    if (head === null) return null;
    
    let odd = head, even = head.next, evenHead = even;
    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};
```

