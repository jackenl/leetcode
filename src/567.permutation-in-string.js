/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const m = s1.length, n = s2.length;
  if (m > n) return false;
  const cnt = new Array(26).fill(0);
  const a = 'a'.charCodeAt();
  for (let i = 0; i < m; i++) {
    cnt[s1[i].charCodeAt() - a]--;
  }
  let left = 0, right = 0;
  while (right < n) {
    const x = s2[right].charCodeAt() - a;
    cnt[x]++;
    while (cnt[x] > 0) {
      cnt[s2[left].charCodeAt() - a]--;
      left++;
    }
    if (right - left + 1 === m)  return true;
    right++;
  }
  return false;
};