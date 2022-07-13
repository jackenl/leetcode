## LeetCode 每日练习 - 第 1 天

### 背景

最近闲来无事打开 LeetCode 挑战每日一题练习，发现由于刷题练习落下一段时间了，自己的算法思维竟变的如此生硬，随便一道 easy 题都能把自己搞得搔头抓耳。为了给自己增加点压力，并且能够锻炼到自己的算法思维，所以开展了本次刷题打卡系列——LeetCode 每日练习

如果你也喜欢这种类型的打卡挑战，欢迎一起共勉！🎉🎉🎉

Fighting！🚀🚀🚀

#### [1480. 一维数组的动态和](https://leetcode.cn/problems/running-sum-of-1d-array/)

难度简单183收藏分享切换为英文接收动态反馈

难度简单183收藏分享切换为英文接收动态反馈

给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

##### 解题思路

从下标 1 开始遍历 nums 数组，让 nums[i] 等于 nums[i] + nums[i - 1] 即可。

```ts
function runningSum(nums: number[]): number[] {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
```

#### [724. 寻找数组的中心下标](https://leetcode.cn/problems/find-pivot-index/)

给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

##### 解题思路

记 nums 数组总和为 total，中心下标 i 两侧的元素之和都为 sum， 等到等式 total = 2 * sum + nums[i]，每次遍历计算当前下标左侧元素的和，然后判断该等式是否成立，如果成立则当前下标为目标中心下标 i，否则不存在中心下标，返回 -1。

```ts
function pivotIndex(nums: number[]): number {
    const total = nums.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (total === sum * 2 + nums[i]) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};
```


