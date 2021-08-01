/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split('');
  const n = arr.length;
  
  let i = 0;
  while (i < n) {
    let start = i;
    while (i < n && arr[i] !== ' ') {
      i++;
    }
    let left = start, right = i - 1;
    while (left < right) {
      const temp = arr[left];
      arr[left++] = arr[right];
      arr[right--] = temp;
    }
    while (i < n && arr[i] === ' ') {
      i++;
    }
  }
  return arr.join('');
};
// @lc code=end

