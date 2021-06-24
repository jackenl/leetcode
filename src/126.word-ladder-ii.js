/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const ans = [];
  const n = wordList.length;
  const k = wordList[0].length - 1;

  const helper = (list, end, cur, isStart) => {
    if (cur === n) return;
    if (end[k] === endWord[k]) {
      list.push(endWord);
      ans.push(list.slice());
      return;
    }
    let i = cur;
    if (isStart) {
      while (i < n) {
        if (wordList[i][0] === end[0]) {
          list.push(wordList[i]);
          helper(list, wordList[i], i + 1, false);
          list.pop();
        }
        i++;
      }
    } else {
      while (i < n) {
        if (wordList[i][k] === end[k]) {
          list.push(wordList[i]);
          helper(list, wordList[i], i + 1, true);
          list.pop();
        }
        i++;
      }
    }
  };

  helper([beginWord], beginWord, 0, true);
  return ans;
};
// @lc code=end
