// Definition for singly-linked list.
declare class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null);
}

// Definition for a binary tree node.
declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

// Definition for node.
declare class XNode {
    val: number;
    children: XNode[];
    constructor(val?: number);
}
