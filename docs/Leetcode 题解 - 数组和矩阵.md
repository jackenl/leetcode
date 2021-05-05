# Leetcode 题解 - 数组和矩阵

- [Leetcode 题解 - 数组和矩阵](#leetcode-题解---数组和矩阵)
  - [283. Move Zeroes](#283-move-zeroes)
  - [566. Reshape the Matrix](#566-reshape-the-matrix)
  - [485. Max Consecutive Ones](#485-max-consecutive-ones)
  - [240. Search a 2D Matrix II](#240-search-a-2d-matrix-ii)
  - [378. Kth Smallest Element in a Sorted Matrix](#378-kth-smallest-element-in-a-sorted-matrix)
  - [645. Set Mismatch](#645-set-mismatch)
  - [287. Find the Duplicate Number](#287-find-the-duplicate-number)

## [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

**描述**

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**解题思路**

使用双指针求解，首先令指针`left`和`right`指向数组的第一个元素，从第一个元素开始遍历，如果当前元素不为`0`则交换所有左右指针的值，然后左右指针往后移一位，否则只是右指针往后移一位，直到有指针指向最后一个元素。

**代码实现**

```js
var moveZeroes = function(nums) {
    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
        }
        right++;
    }
    return nums;
};
```

## [566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)

**描述**
In MATLAB, there is a handy function called `reshape` which can reshape an `m x n` matrix into a new one with a different size `r x c` keeping its original data.

You are given an `m x n` matrix `mat` and two integers `r` and `c` representing the row number and column number of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the `reshape` operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

**代码实现**

```js
var matrixReshape = function(nums, r, c) {
    let m = nums.length, n = nums[0].length;
    if (m * n !== r * c) return nums;
    let ret = [];
    let index = 0;
    for (let i = 0; i < r; i++) {
        ret[i] = [];
        for (let j = 0; j < c; j++) {
            ret[i][j] = nums[Math.floor(index / n)][index % n];
            index++;
        }
    }
    return ret;
};
```

## [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/description/)

**描述**

Given a binary array `nums`, return *the maximum number of consecutive* `1`*'s in the array*.

**解题思路**

遍历数组，使用变量`cur`存储包含当前元素且连续为1最长序列长度，取所有序列中的最大值。

**代码实现**

```js
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, cur = 0;
    for (let num of nums) {
        cur = num === 0 ? 0 : cur + 1;
        max = Math.max(max, cur);
    }
    return max;
};
```

## [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/description/)

**描述**

Write an efficient algorithm that searches for a `target` value in an `m x n` integer `matrix`. The `matrix` has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

**举例**

```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
```

**解题思路**

由于矩阵任意元素都小于其右边和下边范围内所有元素，因此从第一行最后一个元素开始比较，如果如果遍历元素大于目标值，则索引指针往左移一位，如果小于目标值，则索引指针往下移一位，直到找到与目标值相等元素。

**代码实现**

```js
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let m = matrix.length, n = matrix[0].length;
    let raw = 0, col = n - 1;
    while (raw < m && col >= 0) {
        if (matrix[raw][col] === target) return true;
        else if (matrix[raw][col] > target) col--;
        else raw++;
    }
    return false;
};
```

## [378. Kth Smallest Element in a Sorted Matrix](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/er-fen-chao-ji-jian-dan-by-jacksu1024/)

**描述**

Given an `n x n` `matrix` where each of the rows and columns are sorted in ascending order, return *the* `kth` *smallest element in the matrix*.

Note that it is the `kth` smallest element **in the sorted order**, not the `kth` **distinct** element.

**解题思路**

使用二分查找求解：

找出二维矩阵中的最小数`low`和最大数`high`，那么第`k`小数必定在 low~high 之间，取中间值`mid`，计算二维矩阵中小于等于`mid`的元素个数`count`：

* 若`count`小于 `k`，表明第`k`小的数在右半部分且不包含`mid`，使`low = mid + 1`；
* 如果`count`大于`k`，表明第`k`小的数在左半部分且包含`mid`，使`high = mid`；

每次循环保证了第`k`小数一直在 low～high 之间，当`low = high`时，找到第`k`小数等于`low`。

**代码实现**

```js
var kthSmallest = function(matrix, k) {
    let m = matrix.length, n = matrix[0].length;
    let low = matrix[0][0], high = matrix[m - 1][n - 1];
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let cnt = findSmallCount(matrix, mid, m, n);
        if (cnt < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return high;
    
    function findSmallCount(matrix, mid, row, col) {
        let i = row - 1, j = 0;
        let cnt = 0;
        while (i >= 0 && j < col) {
            if (matrix[i][j] <= mid) {
                cnt += i + 1;
                j++;
            } else {
                i--;
            }ΩΩΩΩ
        }
        return cnt;
    }
};
```

## [645. Set Mismatch](https://leetcode.com/problems/set-mismatch/description/)

**描述**

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return *them in the form of an array*.

**解题思路**

使用 Map 结构求解。

**代码实现**

```js
var findErrorNums = function(nums) {
    let map = new Map();
    let double = -1, missing = 1;
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!map.get(i)) missing = i;
        else if (map.get(i) === 2) double = i;
    }
    return [double, missing];
};
```

## [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

**描述**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

**解题思路**

使用双指针求解，类似于有环链表找出环的入口。

**代码实现**

```js
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow
};
```

