/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] === color) return image;
    const m = image.length, n = image[0].length;
    const districts = [0, 1, 0, -1, 0]; // 方向向量
    
    function dfs(image: number[][], x: number, y: number, curColor: number, color: number) {
        // 节点颜色不同，进行回溯
        if (image[x][y] !== curColor) return;
        // 替换节点颜色，防止重复搜索
        image[x][y] = color;
        // 遍历临近节点
        for (let i = 0; i < 4; i++) {
            const nx = x + districts[i];
            const ny = y + districts[i + 1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                dfs(image, nx, ny, curColor, color);
            }
        }
    }
    
    dfs(image, sr, sc, image[sr][sc], color);
    return image;
};
// @lc code=end

