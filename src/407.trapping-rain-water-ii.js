/*
 * @lc app=leetcode id=407 lang=javascript
 *
 * [407] Trapping Rain Water II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  const n = heightMap.length, m = heightMap[0].length;
  const visited = new Array(n).fill(0).map(() => Array(m).fill(false));
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
        queue.push([i, j, heightMap[i][j]]);
        visited[i][j] = true;
      }
    }
  }
  queue.sort((a, b) => a[2] - b[2]);
  let res = 0;
  const dirs = [-1, 0, 1, 0, -1];
  let cur;
  while (queue.length > 0) {
    cur = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = cur[0] + dirs[k];
      const ny = cur[1] + dirs[k + 1];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
        if (cur[2] > heightMap[nx][ny]) {
          res += cur[2] - heightMap[nx][ny];
        }
        insertToSortList(queue, [nx, ny, Math.max(heightMap[nx][ny], cur[2])]);
        visited[nx][ny] = true;
      }
    }
  }
  return res;

  function insertToSortList(list, target) {
    let i = 0;
    while (i < list.length) {
      if (list[i][2] > target[2]) break;
      i++;
    }
    list.splice(i, 0, target);
  }
};
// @lc code=end

function main() {
  // const res = trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]);
  // const res = trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]);
  const res = trapRainWater([[14,17,18,16,14,16],[17,3,10,2,3,8],[11,10,4,7,1,7],[13,7,2,9,8,10],[13,1,3,4,8,6],[20,3,3,9,10,8]]);
  console.log(res);
}
main();
