/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
  const m = version1.length, n = version2.length;
  let i = 0, j = 0;
  while (i < m || j < n) {
    let v1 = 0;
    while (i < m && version1[i] !== '.') {
      v1 += v1 * 10 + Number(version1[i]);
      i++;
    }
    i++;
    let v2 = 0;
    while (j < n && version2[j] !== '.') {
      v2 += v2 * 10 + Number(version2[j]);
      j++;
    }
    j++;
    if (v1 !== v2) {
      return v1 > v2 ? 1 : -1;
    }
  }
  return 0;
};
// @lc code=end

function main() {
  const res = compareVersion("1.01", "1.001");
  console.log(res);
}
main();
