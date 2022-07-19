/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];
    const res = [];
    const queue = [root];
    let cur;
    // 层次遍历
    while (queue.length > 0) {
        let size = queue.length;
        const list = [];
        while (size-- > 0) {
            cur = queue.shift();
            if (cur) {
                list.push(cur.val);
                if (cur.left !== null) queue.push(cur.left);
                if (cur.right !== null) queue.push(cur.right);
            }
        }
        res.push(list);
    }
    return res;
}
// @lc code=end
