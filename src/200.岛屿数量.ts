/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    const m = grid.length, n = grid[0].length;
    const districts = [0, 1, 0, -1, 0]; // 方向向量
    let count = 0;

    function dfs(grid: string[][], x: number, y: number) {
        // 该节点不是陆地，进行回溯
        if (grid[x][y] === '0') return;
        // 标记节点已遍历，防止重复搜索
        grid[x][y] = '0';
        // 搜索临近节点
        for (let i = 0; i < 4; i++) {
            const nx = x + districts[i];
            const ny = y + districts[i + 1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                dfs(grid, nx, ny);
            }
        }
    }

    // 循环搜索所有节点
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                // 深度优先搜索连续陆地
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
};
// @lc code=end

