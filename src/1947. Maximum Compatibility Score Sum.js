/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
  const m = students.length, n = students[0].length;
  const used = new Array(m);
  let ans = 0;
  dfs(students, mentors, m, n, used, 0, 0);
  return ans;
  
  function dfs(students, mentors, m, n, used, i, score) {
    if (i === m) {
      ans = Math.max(ans, score);
      return;
    }
    for (let j = 0; j < m; j++) {
      if (used[j]) continue;
      used[j] = 1;
      let count = 0;
      for (let k = 0; k < n; k++) {
        if (students[i][k] === mentors[j][k]) {
          count++;
        }
      }
      dfs(students, mentors, m, n, used, i + 1, score + count);
      used[j] = 0;
    }
  }
};