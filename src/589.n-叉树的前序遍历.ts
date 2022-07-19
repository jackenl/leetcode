/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: XNode | null): number[] {
    const list: number[] = [];
    function dfs(root: XNode | null) {
        if (root === null) return;
        list.push(root.val);
        // 深度递归
        for (const child of root.children) {
            dfs(child);
        }
    }
    dfs(root);
    return list;
}
// @lc code=end
