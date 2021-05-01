# Leetcode 题解 - 图

## 二分图

### [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/description/)

**描述**

There is an **undirected** graph with `n` nodes, where each node is numbered between `0` and `n - 1`. You are given a 2D array `graph`, where `graph[u]` is an array of nodes that node `u` is adjacent to. More formally, for each `v` in `graph[u]`, there is an undirected edge between node `u` and node `v`. The graph has the following properties:

- There are no self-edges (`graph[u]` does not contain `u`).
- There are no parallel edges (`graph[u]` does not contain duplicate values).
- If `v` is in `graph[u]`, then `u` is in `graph[v]` (the graph is undirected).
- The graph may not be connected, meaning there may be two nodes `u` and `v` such that there is no path between them.

A graph is **bipartite** if the nodes can be partitioned into two independent sets `A` and `B` such that **every** edge in the graph connects a node in set `A` and a node in set `B`.

Return `true` *if and only if it is **bipartite***.

**解题思路**

二分图：若无向图 G=(V,E)*G*=(*V*,*E*) 的顶点集 V*V* 可以分割为两个互不相交的子集，且图中每条边的两个顶点分别属于不同的子集，则称图 G*G* 为一个二分图。

使用 DFS 算法遍历整个图的所有顶点，遍历的过程中用两种不同的颜色对顶点进行染色，相邻顶点染成相反的颜色， 其中分别用1和-1表示两种颜色。如果过程中相邻顶点被染成相同颜色，则说明不是二分图；反之，如果所有的连通域都染色成功，说明它是二分图。另外，遍历过程中如果是已经访问过的顶点，判断当前颜色是否与要染颜色相等，如果是则继续遍历，否则说明不是二分图。

**代码实现**

```js
var isBipartite = function(graph) {
    let n = graph.length;
    let visited = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (visited[i] === 0 && !dfs(graph, visited, i, 1)) {
            return false;
        }
    }
    return true;
    
    function dfs(graph, visited, v, color) {
        if (visited[v] !== 0) {
            return visited[v] === color;
        }
        visited[v] = color;
        for (let w of graph[v]) {
            if (!dfs(graph, visited, w, -color)) {
                return false;
            }
        }
        return true;
    }
};
```

## 拓扑排序

### [207. Course Schedule](https://leetcode.com/problems/course-schedule/description/)

**描述**

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**解题思路**

本题可解读为判断目标图是否是**有向无环图**。

**拓扑排序**的目标是将所有节点排序，使得排在前面的节点不能依赖于排在后面的节点。有向无环图符合拓扑排序原则，可以通过判断目标图是否符合拓扑排序原则来判断是否是有向无环图。

借用标记列表`flags`表示每个节点的搜索状态：

1. 未被搜索：`flags[i] = 0`；
2. 搜索中：`flags[i] = 1`；
3. 已完成搜索：`flags[i] = -1`；

使用 DFS 算法遍历整个图的所有顶点，若存在环则返回`false`，遍历过程如下：

1. 终止条件：
   * 当 `flag[i] == -1`，说明当前访问节点已被其他节点启动的 DFS 访问，无需再重复搜索，直接返回`false`；
   * 当 `flag[i] == 1`，说明在本轮 DFS 搜索中节点 `i` 被第 2 次访问，即 **课程安排图有环** ，直接返回`true`；
2. 开始搜索顶点`i`，令`flags[i] = 1`；
3. 继续 DFS 搜索顶点`i`的子顶点，如果存在环则返回`false`；
4. 当完成顶点`i`的搜素遍历，令`flags = -1`；

若整个过程都没有发现环则返回`true`。

**代码实现**

```js
var canFinish = function(numCourses, prerequisites) {
    let graph = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (let cp of prerequisites) {
        graph[cp[1]].push(cp[0]);
    }
    let flags = new Array(numCourses).fill(0);
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(graph, flags, i)) return false;
    }
    return true;
    
    function dfs(graph, flags, i) {
        if (flags[i] === 1) return false;
        if (flags[i] === -1) return true;
        flags[i] = 1;
        for (let j of graph[i]) {
            if (!dfs(graph, flags, j)) return false;
        }
        flags[i] = -1;
        return true;
    }
};
```

### [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/)

**描述**

There are a total of `n` courses you have to take labelled from `0` to `n - 1`.

Some courses may have `prerequisites`, for example, if `prerequisites[i] = [ai, bi]` this means you must take the course `bi` before the course `ai`.

Given the total number of courses `numCourses` and a list of the `prerequisite` pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

**解题思路**

本题可解读为如果课程图是有向无环图则返回图的拓扑排序列表，否则返回空数组。

解题思路与上题**207. Course Schedule**一致，由于自底向上的 DFS 搜索得到的顶点列表是一个反向列表，将列表进行倒叙排序得到目标课程列表。

**代码实现**

```js
var findOrder = function(numCourses, prerequisites) {
    let graph = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (let cp of prerequisites) {
        graph[cp[1]].push(cp[0]);
    }
    let flags = new Array(numCourses).fill(0);
    let postList = new Array();
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(graph, flags, i, postList)) return [];
    }
    return postList.reverse();
    
    function dfs(graph, flags, i, postList) {
        if (flags[i] === 1) return false;
        if (flags[i] === -1) return true;
        flags[i] = 1;
        for (let j of graph[i]) {
            if (!dfs(graph, flags, j, postList)) return false;
        }
        flags[i] = -1;
        postList.push(i);
        return true;
    }
};
```

## 并查集

### [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/description/)

**描述**

In this problem, a tree is an **undirected** graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of `edges`. Each element of `edges` is a pair `[u, v]` with `u < v`, that represents an **undirected** edge connecting nodes `u` and `v`.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array. The answer edge `[u, v]` should be in the same format, with `u < v`.

**解题思路**

**并查集**是一种树形的数据结构，顾名思义，它用于处理一些不交集的 **合并** 及 **查询** 问题。 它支持两种操作：

- 查找（Find）：确定某个元素处于哪个子集；
- 合并（Union）：将两个子集合并成一个集合。

在并查集中，相互独立的数据集称为**连通分量**。

可以通过并查集寻找附加的边。初始时，每个节点都属于不同的连通分量。遍历每一条边，判断这条边连接的两个顶点是否属于相同的连通分量。

如果两个顶点属于不同的连通分量，则说明在遍历到当前的边之前，这两个顶点之间不连通，因此当前的边不会导致环出现，合并这两个顶点的连通分量。

如果两个顶点属于相同的连通分量，则说明在遍历到当前的边之前，这两个顶点之间已经连通，因此当前的边导致环出现，为附加的边，将当前的边作为答案返回。

**代码实现**

```js
var findRedundantConnection = function(edges) {
    let n = edges.length;
    let parent = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }
    for (let i = 0; i < n; i++) {
        let edge = edges[i];
        let index1 = edge[0], index2 = edge[1];
        if (find(parent, index1) !== find(parent, index2)) {
            union(parent, index1, index2);
        } else {
            return edge;
        }
    }
    return [];
    
    function find(parent, index) {
        if (parent[index] !== index) {
            parent[index] = find(parent, parent[index]);
        }
        return parent[index];;
    }
    function union(parent, index1, index2) {
        parent[find(parent, index1)] = find(parent, index2);
    }
};
```

