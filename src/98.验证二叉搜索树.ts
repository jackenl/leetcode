/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
    if (root ===  null) return true;
    // 中序遍历
    const stack = [];
    let cur = root, pre = Number.MIN_SAFE_INTEGER;
    while (stack.length > 0 || cur !== null) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if (cur.val <= pre) return false;
        pre = cur.val;
        cur = cur.right;
    }
    return true;
};
// @lc code=end

