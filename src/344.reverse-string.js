/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0, right = s.length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }
};
// @lc code=end

