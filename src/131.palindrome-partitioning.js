/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 0) return [];
  const n = s.length;
  const ans = [];

  const backTrack = (str, n, list, index) => {
    if (index === n) {
      ans.push(list.slice());
      return;
    }
    for (let i = index; i < n; i++) {
      if (!isPalindrome(str, index, i)) continue;
      list.push(str.substring(index, i + 1));
      backTrack(str, n, list, i + 1);
      list.pop();
    }
  }

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  backTrack(s, n, [], 0);
  return ans;
};
// @lc code=end

