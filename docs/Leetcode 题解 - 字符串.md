# Leetcode 题解 - 字符串

- [Leetcode 题解 - 字符串](#leetcode-题解---字符串)
  - [242. Valid Anagram](#242-valid-anagram)
  - [409. Longest Palindrome](#409-longest-palindrome)
  - [205. Isomorphic Strings](#205-isomorphic-strings)
  - [647. Palindromic Substrings](#647-palindromic-substrings)
  - [9. Palindrome Number](#9-palindrome-number)
  - [696. Count Binary Substrings](#696-count-binary-substrings)

## [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/submissions/)

**描述**

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

**解题思路**

用 HashMap 来映射字符出现次数，然后比较两字符串的字符出现数量是否相同。由于本题的字符串只包含 26 个小写字符，因此可以使用长度为 26 的整型数组对字符串出现的字符进行统计。

**代码实现**

```js
var isAnagram = function(s, t) {
    let cnts = new Array(26).fill(0);
    let a = 'a'.charCodeAt();
    for (let i = 0; i < s.length; i++) {
        cnts[s[i].charCodeAt() - a]++;
    }
    for (let j = 0; j < t.length; j++) {
        cnts[t[j].charCodeAt() - a]--;
    }
    for (let cnt of cnts) {
        if (cnt !== 0) {
            return false;
        }
    }
    return true;
};
```

## [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/submissions/)

**描述**

Given a string `s` which consists of lowercase or uppercase letters, return *the length of the **longest palindrome*** that can be built with those letters.

Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome here.

**解题思路**

用 HashMap 来映射字符出现次数，每个字符有偶数个可以用来构成回文字符串，回文字符串中间可以含有一个其他字符。

**代码实现呐**

```js
var longestPalindrome = function(s) {
    if (s.length === 0) return 0;
    let map = new Map();
    let cnt = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (let item of map) {
        cnt += Math.floor(item[1] / 2) * 2;
    }
    if (cnt < n) cnt += 1;
    return cnt;
};
```

## [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)

**描述**

Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**解题思路**

分别用 Map 结构映射两字符串的字符出现次数，另外用一个 Map 结构映射两字符串对应索引值，循环遍历两字符串，每次判断两对应索引值的出现次数是否相等。

**代码实现**

```js
var isIsomorphic = function(s, t) {
    let cnts1 = new Array(256).fill(0);
    let cnts2 = new Array(256).fill(0);
    let map = new Array(256);
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let index1 = s[i].charCodeAt();
        let index2 = t[i].charCodeAt();
        if (cnts1[index1] !== cnts2[index2] || (map[index1] && map[index1] !== index2)) {
            return false;
        }
        cnts1[index1]++;
        cnts2[index2]++;
        if (!map[index1]) map[index1] = index2;
    }
    return true;
};
```

## [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/submissions/)

**描述**

Given a string `s`, return *the number of **palindromic substrings** in it*.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.

**解题思路**

遍历每个字符，计算以当前字符为中心的奇数回文子串数量和以当前字符和下一字符为中心的偶数回文子串数量。

**代码实现**

```js
var countSubstrings = function(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        isPalindromic(s, i, i);
        isPalindromic(s, i, i + 1);
    }
    return cnt;
    
    function isPalindromic(s, start, end) {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
            cnt++;
        }
    }
};
```

## [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

**描述**

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

**解题思路**

将整数分割成均等两部分，如果整数位数为基数则移除中位数，倒置右边部分，然后判断两部分是否相等。

**代码实现**

```js
var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || x % 10 === 0) return false;
    let y = 0;
    while (x > y) {
        y = y * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === y || x === Math.floor(y / 10);
};
```

## [696. Count Binary Substrings](https://leetcode.com/problems/count-binary-substrings/submissions/)

**描述**

Give a binary string `s`, return the number of non-empty substrings that have the same number of `0`'s and `1`'s, and all the `0`'s and all the `1`'s in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

**解题思路**

用变量`cur`保存当前连续的字符数量，用变量`pre`保存上一不同字符的连续字符长度，遍历整个字符串，如果`pre >= cur`，则字符串中连续 1 和连续 0 数量相同的子字符串个数增加1。

**代码实现**

```js
var countBinarySubstrings = function(s) {
    let cnt = 0;
    let pre = 0, cur = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            cur++;
        } else {
            pre = cur;
            cur = 1;
        }
        if (pre >= cur) {
            cnt++;
        }
    }
    return cnt;
};
```
