# Leetcode 题解 - 哈希表

- [Leetcode 题解 - 哈希表](#leetcode-题解---哈希表)
  - [1. Two Sum](#1-two-sum)
  - [217. Contains Duplicate](#217-contains-duplicate)
  - [594. Longest Harmonious Subsequence](#594-longest-harmonious-subsequence)
  - [128. Longest Consecutive Sequence](#128-longest-consecutive-sequence)

## [1. Two Sum](https://leetcode.com/problems/two-sum/description/)

**描述**

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly\* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

**解题思路**

使用`HashMap`存储`nums[i]`与`target - nums[i]`的关系映射，遍历数组元素，查找是否存在`target - nums[i]`索引，如果存在则返回。

**代码实现**

```js
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
};
```

## [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/submissions/)

**描述**

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**解题思路**

用`HashSet`结构存储数组元素，判断集合的`size`值是否小于数组的长度。

**代码实现**

```js
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size < nums.length;
};
```

## [594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/description/)

**描述**

We define a harmonious array as an array where the difference between its maximum value and its minimum value is **exactly** `1`.

Given an integer array `nums`, return *the length of its longest harmonious subsequence among all its possible subsequences*.

A **subsequence** of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

**解题思路**

和谐序列中最大数和最小数之差正好为1，使用`HashMap`结构存储元素出现次数，然后遍历其键值判断是否存在比其大1的键值，如果存在则相加两键值出现的次数，取所有和中的最大值。

**代码实现**

```js
var findLHS = function(nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let max = 0;
    for (let num of map.keys()) {
        if (map.has(num + 1)) {
            max = Math.max(max, map.get(num) + map.get(num + 1));
        }
    }
    return max;
};
```

## [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/submissions/)

**描述**

Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence.*

**解题思路**

使用`HashSet`数据结构保存数组元素，然后遍历其所有元素，内部循环遍历是否存在比单前值大1的元素，如果存在则连续序列长度+1，最后取所有可能连续序列中的最大长度。

**代码实现**

```js
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let max = 0;
    for (let num of set) {
        if (set.has(num - 1)) continue;
        let cur = num, cnt = 1;
        while (set.has(cur + 1)) {
            cur += 1;
            cnt += 1;
        }
        max = Math.max(max, cnt);
    }
    return max;
};
```

