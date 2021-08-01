/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let pre = 0, cur = 0;
  for (let i = 2; i <= n; i++) {
    const next = Math.min(cur + cost[i - 1], pre + cost[i - 2]);
    pre = cur;
    cur = next;
  }
  return cur;
};
// @lc code=end

