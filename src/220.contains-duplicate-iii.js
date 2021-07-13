/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const getId = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
  }

  const n = nums.length;
  const size = t + 1;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    const id = getId(x, size);
    if (map.has(id)) return true;
    if (map.has(id - 1) && Math.abs(x - map.get(id - 1)) <= t) return true;
    if (map.has(id + 1) && Math.abs(x - map.get(id + 1)) <= t) return true;
    map.set(id, x);
    if (i >= k) map.delete(getId(nums[i - k], size));
  }
  return false;
};
// @lc code=end

