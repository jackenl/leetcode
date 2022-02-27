/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const n1 = num1.length, n2 = num2.length;
  const arr = new Array(n1 + n2).fill(0);
  for (let i = n1 - 1; i >= 0; i--) {
    const val1 = num1[i] - '0';
    for (let j = n2 - 1; j >= 0; j--) {
      const val2 = num2[j] - '0';
      const sum = arr[i + j + 1] + val1 * val2;
      arr[i + j + 1] = sum % 10;
      arr[i + j] += Math.floor(sum / 10);
    }
  }
  return arr[0] === 0 ? arr.slice(1).join('') : arr.join('');
};
// @lc code=end

