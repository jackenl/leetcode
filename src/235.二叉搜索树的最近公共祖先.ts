/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	while (root) {
        if (p.val < root.val && q.val < root.val) {
            // 最近公共祖先在左子树上
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            // 最近公共祖先在右子树上
            root = root.right;
        } else {
            // 否则当前节点就是最近公共祖先
            break;
        }
    }
    return root;
};
// @lc code=end

