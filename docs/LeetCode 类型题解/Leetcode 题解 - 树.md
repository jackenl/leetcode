# leetcode 题解 - 树

- [leetcode 题解 - 树](#leetcode-题解---树)
  - [递归](#递归)
    - [104. Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)
    - [110. Balanced Binary Tree](#110-balanced-binary-tree)
    - [543. Diameter of Binary Tree](#543-diameter-of-binary-tree)
    - [226. Invert Binary Tree](#226-invert-binary-tree)
    - [617. Merge Two Binary Trees](#617-merge-two-binary-trees)
    - [112. Path Sum](#112-path-sum)
    - [437. Path Sum III](#437-path-sum-iii)
    - [572. Subtree of Another Tree](#572-subtree-of-another-tree)
    - [101. Symmetric Tree](#101-symmetric-tree)
    - [111. Minimum Depth of Binary Tree](#111-minimum-depth-of-binary-tree)
    - [404. Sum of Left Leaves](#404-sum-of-left-leaves)
    - [687. Longest Univalue Path](#687-longest-univalue-path)
    - [337. House Robber III](#337-house-robber-iii)
  - [层次遍历](#层次遍历)
    - [637. Average of Levels in Binary Tree](#637-average-of-levels-in-binary-tree)
    - [513. Find Bottom Left Tree Value](#513-find-bottom-left-tree-value)
  - [深度遍历](#深度遍历)
    - [144. Binary Tree Preorder Traversal](#144-binary-tree-preorder-traversal)
    - [94. Binary Tree Inorder Traversal](#94-binary-tree-inorder-traversal)
    - [145. Binary Tree Postorder Traversal](#145-binary-tree-postorder-traversal)
  - [二叉查找树（BST）](#二叉查找树bst)
    - [669. Trim a Binary Search Tree](#669-trim-a-binary-search-tree)
    - [230. Kth Smallest Element in a BST](#230-kth-smallest-element-in-a-bst)
    - [538. Convert BST to Greater Tree](#538-convert-bst-to-greater-tree)
    - [235. Lowest Common Ancestor of a Binary Search Tree](#235-lowest-common-ancestor-of-a-binary-search-tree)
    - [236. Lowest Common Ancestor of a Binary Tree](#236-lowest-common-ancestor-of-a-binary-tree)
    - [108. Convert Sorted Array to Binary Search Tree](#108-convert-sorted-array-to-binary-search-tree)
    - [109. Convert Sorted List to Binary Search Tree](#109-convert-sorted-list-to-binary-search-tree)
    - [653. Two Sum IV - Input is a BST](#653-two-sum-iv---input-is-a-bst)
    - [530. Minimum Absolute Difference in BST](#530-minimum-absolute-difference-in-bst)
    - [501. Find Mode in Binary Search Tree](#501-find-mode-in-binary-search-tree)

## 递归

### [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

**描述**

Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**解题思路**

从根节点开始进行层次遍历，每遍历完一层树节点，树的高度变量+1。

**代码实现**

```js
var maxDepth = function(root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

### [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

**描述**

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of *every* node differ in height by no more than 1.

**解题思路**

平衡树的所有子节点的左右子树高度差都小于等于1，通过递归自底向上判断所有子节点的左右子树的高度差是否小于等于1。

**代码实现**

```js
var isBalanced = function(root) {
    if (root === null) return true;
    return maxDepth(root) >= 0;
    
    function maxDepth(root) {
        if (root === null) return 0;
        let l = maxDepth(root.left), r = maxDepth(root.right);
        if (l === -1 || r === -1 || Math.abs(l - r) > 1) {
            return -1;
        }
        return Math.max(l, r) + 1;
    }
};
```

### [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/description/)

**描述**

Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

**解题思路**

通过递归层次遍历所有树节点，计算每个节点的左右子树的最长路径，即左右子树的最大高度，取所有节点的左右子树的最长路径和中最大值。

**代码实现**

```js
var diameterOfBinaryTree = function(root) {
    let max = 0;
    maxDepth(root);
    return max;
    
    function maxDepth(root) {
        if (root === null) return 0;
        let l = maxDepth(root.left), r = maxDepth(root.right);
        max = Math.max(max, l + r);
        return Math.max(l, r) + 1;
    }
};
```

### [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/description/)

**描述**

Given the `root` of a binary tree, invert the tree, and return *its root*.

**解题思路**

对树进行层次遍历，交换节点的左右子树。

**代码实现**

```js
var invertTree = function(root) {
    if (root === null) return root;
    
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
```

### [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/description/)

**描述**

You are given two binary trees `root1` and `root2`.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return *the merged tree*.

**Note:** The merging process must start from the root nodes of both trees.

**解题思路**

同时对两二叉树进行层次遍历，构建新的二叉树，其中每个节点的值为两二叉树对应位置节点的值之和。

**代码实现**

```js
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    
    let root = new TreeNode(root1.val + root2.val);
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);
    return root;
};
```

### [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

**描述**

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

**解题思路**

使用递归求解，从根节点开始进行层次遍历，判断左右子树是否存在路径和是否等于目标值减去父节点的值。

**代码实现**

```js
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
```

### [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

**描述**

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

**解题思路**

转变直接求解求解方式，首先通过递归层次遍历求出所有子树的包含子树根节点的路径和等于目标值的数量，把这些路径数量相加得到的目标结果。

**代码实现**

```js
var pathSum = function(root, sum) {
    if (root === null) return 0;
    return pathSumWithRoot(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    
    function pathSumWithRoot(root, sum) {
        if (root === null) return 0;
        
        let ret = 0;
        if (root.val === sum) ret++;
        ret += pathSumWithRoot(root.left, sum - root.val) + pathSumWithRoot(root.right, sum - root.val);
        return ret;
    }
};
```

### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/description/)

**描述**

Given two **non-empty** binary trees **s** and **t**, check whether tree **t** has exactly the same structure and node values with a subtree of **s**. A subtree of **s** is a tree consists of a node in **s** and all of this node's descendants. The tree **s** could also be considered as a subtree of itself.

**解题思路**

通过递归层次遍历二叉树，查找是否有与目标树存在全等关系的子树。

**代码实现**

```js
var isSubtree = function(s, t) {
    if (s === null) return false;
    return isSubtreeWithRoot(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
    
    function isSubtreeWithRoot(s, t) {
        if (s === null && t === null) return true;
        if (s === null || t === null) return false;
        if (s.val !== t.val) return false;
        return isSubtreeWithRoot(s.left, t.left) && isSubtreeWithRoot(s.right, t.right);
    }
};
```

### [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

**描述**

Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).

**解题思路**

通过递归层次遍历二叉树，判断所有非叶子结点的左右子树是否为对称二叉树。

**代码实现**

```js
var isSymmetric = function(root) {
    if (root === null) return true;
    return isSymmetricTree(root.left, root.right);
    
    function isSymmetricTree(root1, root2) {
        if (root1 === null && root2 === null) return true;
        if (root1 === null || root2 === null) return false;
        if (root1.val !== root2.val) return false;
        return isSymmetricTree(root1.left, root2.right) && isSymmetricTree(root1.right, root2.left);
    }
};
```

### [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

**描述**

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**解题思路**

通过递归层次遍历二叉树求解所有根节点到叶子节点的路径长度，取其中最小长度。

**代码实现**

```js
var minDepth = function(root) {
    if (root === null) return 0;
    let l = minDepth(root.left), r = minDepth(root.right);
    if (l === 0 || r === 0) return l + r + 1;
    return Math.min(l, r) + 1;
};
```

### [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/description/)

**描述**

Find the sum of all left leaves in a given binary tree.

**解题思路**

通过递归层次遍历二叉树，判断遍历节点的左节点是否为叶子节点，如果是则将左节点的值与上层符合节点的值相加，得到求解值。

**代码实现**

```js
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;
    if (isLeaf(root.left)) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
        
    function isLeaf(root) {
        if (root === null) return false;
        return root.left === null && root.right === null;
    }
};
```

### [687. Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)

**描述**

Given the `root` of a binary tree, return *the length of the longest path, where each node in the path has the same value*. This path may or may not pass through the root.

**The length of the path** between two nodes is represented by the number of edges between them.

**解题思路**

通过递归层次遍历二叉树，递归栈保存上层节点的左右子树中相同节点值的最大路径长度`left`和`right`，判断遍历节点的左节点的值是否等于父节点的值，如果等于则`left+1`,否则`left`重置为0，同理判断右节点，比较所有`left`与`right`的和，取其中的最大值。

**代码实现**

```js
var longestUnivaluePath = function(root) {
    let path = 0;
    dfs(root);
    return path;
    
    function dfs(root) {
        if (root === null) return 0;
        let left = dfs(root.left), right = dfs(root.right);
        let leftPath = root.left !== null && root.left.val === root.val ? left + 1 : 0;
        let rightPath = root.right !== null && root.right.val === root.val ? right + 1 : 0;
        path = Math.max(path, leftPath + rightPath);
        return Math.max(leftPath, rightPath);
    }
};
```

### [337. House Robber III](https://leetcode.com/problems/house-robber-iii/description/)

**描述**

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called `root`.

Besides the `root`, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if **two directly-linked houses were broken into on the same night**.

Given the `root` of the binary tree, return *the maximum amount of money the thief can rob **without alerting the police***.

**解题思路**

通过递归间隔遍历所有节点并相加，其中有两种间隔遍历方式，分别是从根节点开始遍历和从根节点的左右子树开始遍历，比较这两种遍历方式的值之和，取最大值。

**代码实现**

```js
var rob = function(root) {
    if (root === null) return 0;
    let value1 = root.val;
    if (root.left !== null) value1 += rob(root.left.left) + rob(root.left.right);
    if (root.right !== null) value1 += rob(root.right.left) + rob(root.right.right);
    let value2 = rob(root.left) + rob(root.right);
    return Math.max(value1, value2);
};
```

## 层次遍历

### [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)

**描述**

Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*. Answers within `10-5` of the actual answer will be accepted.

**解题思路**

通过层次遍历计算每一层节点的值之和，除以每一层节点的数量得到每层节点的平均数。

**代码实现**

```js
var averageOfLevels = function(root) {
    if (root === null) return 0;
    let queue = [root];
    let ret = [];
    while (queue.length > 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        ret.push(sum / size);
    }
    return ret;
};
```

### [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/description/)

**描述**

Given the `root` of a binary tree, return the leftmost value in the last row of the tree.

**解题思路**

从右往左进行进行层次遍历，最后一个遍历节点为二叉树左下角节点。

**代码实现**

```js
var findBottomLeftValue = function(root) {
    if (root === null) return null;
    let queue = [root];
    let node = null;
    while (queue.length > 0) {
        node = queue.shift();
        if (node.right !== null) queue.push(node.right);
        if (node.left !== null) queue.push(node.left);
    }
    return node.val;
};
```

## 深度遍历

### [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)

前序遍历

**代码实现**

```js
// 递归
var preorderTraversal = function(root) {
    let ret = [];
    dfs(root);
    return ret;
    
    function dfs(root) {
        if (root === null) return;
        ret.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
};

// 非递归
var preorderTraversal = function(root) {
    if (root === null) return [];

    let stack = [root];
    let ret = [];
    while (stack.length > 0) {
        let node = stack.pop();
        ret.push(node.val);
        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
    }
    return ret;
};
```

### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)

中序遍历

**代码实现**

```js
// 递归
var inorderTraversal = function(root) {
    let ret = [];
    dfs(root);
    return ret;
    
    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        ret.push(root.val);
        dfs(root.right);
    }
};

// 非递归
var inorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [];
    let ret = [];
    let cur = root;
    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        ret.push(cur.val);
        cur = cur.right;
    }
    return ret;
};
```

### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/description/)

后续遍历

**代码实现**

```js
// 递归
var postorderTraversal = function(root) {
    let ret = [];
    dfs(root);
    return ret;
    
    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        dfs(root.right);
        ret.push(root.val);
    }
};

// 非递归
var postorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [];
    let ret = [];
    let cur = root, pre = null;
    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right === null || cur.right === pre) {
            stack.pop();
            ret.push(cur.val);
            pre = cur;
            cur = null;
        } else {
            cur = cur.right;
        }
    }
    return ret;
};
```

## 二叉查找树（BST）

二叉查找树（BST）：根节点大于等于左子树所有节点，小于等于右子树所有节点，二叉查找树中序遍历有序。

### [669. Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/description/)

**描述**

Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should **not** change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a **unique answer**.

Return *the root of the trimmed binary search tree*. Note that the root may change depending on the given bounds.

**解题思路**

使用递归求解，逐层递归判断树节点是否存在一下情况：

* 如果节点的值大于`R`，节点右子树都不在范围之内，直接去除，返回左子树继续递归；
* 如果节点的值小于`L`，节点左子树都不在范围之内，直接去除，返回右子树继续递归；

以遍历节点是空节点为递归出口停止递归，最终得到目标二叉查找树。

**代码实现**

```js
var trimBST = function(root, low, high) {
    if (root === null) return null;
    if (root.val > high) return trimBST(root.left, low, high);
    if (root.val < low) return trimBST(root.right, low, high);
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};
```

### [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)

**描述**

Given the `root` of a binary search tree, and an integer `k`, return *the* `kth` (**1-indexed**) *smallest element in the tree*.

**解题思路**

通过中序遍历有序遍历二叉查找树，数量从零开始，每遍历一个节点对数量进行+1，当数量等于`k`时，该遍历节点为第`k`个元素。

**代码实现**

```js
var kthSmallest = function(root, k) {
    let ret = null, cnt = 0;
    inOrderTravers(root);
    return ret;
    
    function inOrderTravers(root) {
        if (root === null) return;
        inOrderTravers(root.left);
        cnt++;
        if (cnt === k) {
            ret = root.val;
            return;
        }
        inOrderTravers(root.right);
    }
};
```

### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/description/)

**描述**

Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

As a reminder, a *binary search tree* is a tree that satisfies these constraints:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**解题思路**

对二叉搜素树进行从右往左倒叙遍历，用一个变量`sum`储存前面遍历节点的和，然后与该节点相加，重复以上操作，最终得到目标二叉树。

**代码实现**

```js
var convertBST = function(root) {
    let sum = 0;
    travers(root);
    return root;
    
    function travers(root) {
        if (root === null) return;
        travers(root.right);
        sum += root.val;
        root.val = sum;
        travers(root.left)
    }
};
```

### [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/)

**描述**

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”

**解题思路**

使用递归求解，递归层次遍历二叉查找树，判断是否存在以下情况：

* 遍历节点同时大于两节点，说明祖先节点在左子树上，排除右子树，继续递归遍历左子树；
* 遍历节点同时小于两节点，说明祖先节点在右子树上，排除左子树，继续递归遍历右子树；

否则该节点为最近公共祖先节点。

**代码实现**

```js
var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};
```

### [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

**描述**

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”

**解题思路**

若`root`是`p`和`q`的最近公共祖先，则只能为以下情况之一：

1. `p`和`q`在`root`的子树中，且分别位于两侧；
2. `p == root`，且`q`在`root`左或右子树中；
3. `q == root`，且`p`在`root`左或右子树中；

通过递归对二叉树进行后续遍历，当遇到节点`p`或`q`时返回。自底向上回溯，当节点`p`、`q`在节点`root`的两侧时，节点`root`即为最近公共祖先，则向上返回`root`。

**代码实现**

```js
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
 		if (left === null && right === null) return null; // 可与最后合并省略
    if (left === null) return right; // root = q
    if (right === null) return left; // root = p
    return root; // p, q在root两侧
};
```

### [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

**描述**

Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a **height-balanced** binary search tree*.

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

**解题思路**

使用递归求解，获取数组的中位数元素，并以其创建根节点，中位数左边元素属于左子树，右边元素属于右子树，继续递归左边元素数组和右边元素数组，创建子树根节点，并向上返回，得到二叉查找树。

**代码实现**

```js
var sortedArrayToBST = function(nums) {
    return toBST(nums, 0, nums.length -1);
    
    function toBST(nums, start, end) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = toBST(nums, start, mid - 1);
        root.right = toBST(nums, mid + 1, end);
        return root;
    }
};
```

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/)

**描述**

Given the `head` of a singly linked list where elements are **sorted in ascending order**, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**解题思路**

与通过数组创建二叉查找树的思想一样，不同的是链表需要首先确定链表的中位数元素，可通过指针`slow`首先指向`head`，指针`fast`指向`head.next`，循环向前移动双指针，其中每次`slow`往前一步，`fast`往前两部，直至`fast.next`等于`null`，`slow`指向节点是中位数，并断开链表。

**代码实现**

```js
var sortedListToBST = function(head) {
    if (head === null) return null;
    if (head.next === null) return new TreeNode(head.val);
    let slow = head, fast = head.next;
    let pre = head;
    while (fast !== null && fast.next !== null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null; // 断开链表
    let root = new TreeNode(slow.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);
    return root;
};
```

### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/)

**描述**

Given the `root` of a Binary Search Tree and a target number `k`, return *`true` if there exist two elements in the BST such that their sum is equal to the given target*.

**解题思路**

首先通过中序遍历将二叉查找树转换成数组，然后通过双指针法对数组进行查找。

注意：由于无法确定两节点的相对位置，无法通过分别遍历处理左右子树来求解。

**代码实现**

```js
var findTarget = function(root, k) {
    let stack = [];
    inOrderTravers(root);
    let i = 0, j = stack.length - 1;
    while (i < j) {
        let sum = stack[i] + stack[j];
        if (sum === k) return true;
        else if (sum < k) i++;
        else  j--;
    }
    return false;
    
    function inOrderTravers(root) {
        if (root === null) return;
        inOrderTravers(root.left);
        stack.push(root.val);
        inOrderTravers(root.right);
    }
};
```

### [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)

**描述**

Given a binary search tree with non-negative values, find the minimum [absolute difference](https://en.wikipedia.org/wiki/Absolute_difference) between values of any two nodes.

**解题思路**

利用二叉查找树的中序遍历为有序的性质，计算中序遍历中临近的两个节点之差的绝对值，取最小值。

**代码实现**

```js
var getMinimumDifference = function(root) {
    let preNode = null;
    let min = Number.MAX_SAFE_INTEGER;
    inOrder(root);
    return min;
    
    function inOrder(root) {
        if (root === null) return;
        inOrder(root.left);
        if (preNode !== null) min = Math.min(min, root.val - preNode.val);
        preNode = root;
        inOrder(root.right);
    }
};
```

### [501. Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/)

**描述**

Given the `root` of a binary search tree (BST) with duplicates, return *all the [mode(s)](https://en.wikipedia.org/wiki/Mode_(statistics)) (i.e., the most frequently occurred element) in it*.

If the tree has more than one mode, return them in **any order**.

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
- The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
- Both the left and right subtrees must also be binary search trees.

**解题思路**

中序遍历二叉查找树，判断相邻元素是否相等。

**代码实现**

```js
var findMode = function(root) {
    let curCnt = 1, maxCnt = 1;
    let preNode = null;
    let maxNums = [];
    inOrder(root);
    return maxNums;
    
    function inOrder(root) {
        if (root === null) return;
        inOrder(root.left);
        if (preNode !== null) {
            if (preNode.val === root.val) curCnt++;
            else curCnt = 1;
        }
        if (curCnt > maxCnt) {
            maxCnt = curCnt;
            maxNums.length = 0;
            maxNums.push(root.val);
        } else if (curCnt === maxCnt) {
            maxNums.push(root.val);
        }
        preNode = root;
        inOrder(root.right);
    }
};
```

