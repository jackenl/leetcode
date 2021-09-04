/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const n = stones.length;
  let sum = 0;
  for (let i = 0; i < n; i ++) {
    sum += stones[i];
  }
  const target = Math.floor(sum / 2);
  const dp = new Array(target + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const stone = stones[i - 1];
    for (let j = target; j >= stone; j--) {
      dp[j] = Math.max(dp[j], dp[j - stone] + stone);
    }
  }
  return sum - dp[target] * 2;
};
// @lc code=end

function main() {
  const ans = lastStoneWeightII([2,7,4,1,8,1])
  console.log(ans);
}
main();
