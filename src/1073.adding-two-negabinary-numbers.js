/*
 * @lc app=leetcode id=1073 lang=javascript
 *
 * [1073] Adding Two Negabinary Numbers
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
  const m = arr1.length, n = arr2.length;
  const resultList = [];
  let carry = 0;
  let i = m - 1, j = n - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += arr1[i];
    if (j >= 0) sum += arr2[j];
    resultList.unshift(sum & 1);
    carry = -1 * (sum >> 1);
  }
  let beginIndex = 0;
  while (beginIndex < resultList.length && resultList[beginIndex] === 0) {
    beginIndex++;
  }
  return resultList.slice(beginIndex);
};
// @lc code=end

