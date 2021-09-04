/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const n = nums.length;
  buildMaxHeap(nums, n);
  for (let i = n - 1; i >= n - k + 1; i--) {
    swap(nums, 0, i);
    maxHeapify(nums, 0, i);
  }
  return nums[0];

  function buildMaxHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
      maxHeapify(nums, i, heapSize);
    }
  }

  function maxHeapify(nums, i, heapSize) {
    let largest = i;
    while (true) {
      let l = i * 2 + 1, r = i * 2 + 2;
      if (l < heapSize && nums[l] > nums[largest]) {
        largest = l;
      }
      if (r < heapSize && nums[r] > nums[largest]) {
        largest = r;
      }
      if (largest === i) break;
      swap(nums, i, largest);
      i = largest;
    }
  }

  function swap(nums, x, y) {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  }
};
// @lc code=end

function main() {
  const ans = findKthLargest([3,2,1,5,6,4], 2);
  console.log(ans);
}
main();
