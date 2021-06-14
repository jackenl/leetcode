/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const visited = new Array(n + 1).fill(0);
  let ans = '';
  let index = 0;

  const helper = (n, k, list, cur) => {
    if (cur === n) {
      index++;
      if (index === k) ans = list.join('');
      return;
    }
    if (index === k) return;
    for (let i = 1; i <= n; i++) {
      if (visited[i]) continue;
      list.push(i);
      visited[i] = 1;
      helper(n, k, list, cur + 1);
      list.pop();
      visited[i] = 0;
    }
  }

  helper(n, k, [], 0);
  return ans;
};
// @lc code=end

