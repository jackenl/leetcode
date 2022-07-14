## LeetCode 每日练习 - 第 2 天

### 背景

最近闲来无事打开 LeetCode 挑战每日一题练习，发现由于刷题练习落下一段时间了，自己的算法思维竟变的如此生硬，随便一道 easy 题都能把自己搞得搔头抓耳。为了给自己增加点压力，并且能够锻炼到自己的算法思维，所以开展了本次刷题打卡系列——LeetCode 每日练习

如果你也喜欢这种类型的打卡挑战，欢迎一起共勉！🎉🎉🎉

Fighting！🚀🚀🚀

#### [205. 同构字符串](https://leetcode.cn/problems/isomorphic-strings/)

给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

##### 解题思路

**哈希表**

两字符串是同构表示两字符串按照顺序从左到右每个位置的值映射关系与前面位置相同值的映射关系完全一致

维护哈希表 map，以位置 i 的 s[i] 为键，以 t[i] 为值，同时维护哈希集合 set，保存非重复字符 t[i]。从左开始遍历 s，如果 map 的键中存在遍历元素 s[i]，则判断映射值是否等于 t[i]，如果不等说明 s[i] 存在多个值映射，不符合同构条件，返回 false；或者 map 的键中不存在 s[i]，但 set 存在 t[i] ，说明 t[i] 存在多个值映射，不符合同构条件，返回 false。否则持续更新 map 和 set，直到遍历结束没有出现异构映射，则说明两字符串是同构的，返回 true 即可

```ts
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const n = s.length;
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            // s[i] 存在多个映射，不符合
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            // t[i] 存在多个映射，不符合
            if (set.has(t[i])) return false;
            map.set(s[i], t[i]);
            set.add(t[i]);
        }
    }
    return true;
};
```

#### [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/)

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

##### 解题思路

**双指针**

初始化两个指针 i 和 j，分别指向 s 和 t 的初始位置。每次匹配指向的值是否相等，匹配成功则 i 和 j 同时右移，匹配 s 的下一个位置，匹配失败则 j 右移，i 不变，尝试用 t 的下一个字符匹配 s，直到匹配成功 s 的所有字符，即指针 i 的位置索引等于 s 的长度 length，说明 s 是 t 的子序列

```ts
function isSubsequence(s: string, t: string): boolean {
    const n = s.length;
    const m = t.length;
    let i = 0, j = 0;
    // 贪心匹配
    while (i < n && j < m) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === n;
};
```
