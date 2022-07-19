# Leetcode 题解 - 栈和队列

- [Leetcode 题解 - 栈和队列](#leetcode-题解---栈和队列)
  - [232. Implement Queue using Stacks](#232-implement-queue-using-stacks)
  - [225. Implement Stack using Queues](#225-implement-stack-using-queues)
  - [155. Min Stack](#155-min-stack)
  - [20. Valid Parentheses](#20-valid-parentheses)
  - [739. Daily Temperatures](#739-daily-temperatures)
  - [503. Next Greater Element II](#503-next-greater-element-ii)

## [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/)

**描述**

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

**解题思路**

队列的顺序为先进先出，使用两个栈出入转换后就是先进先出顺序。

**代码实现**

```js
var MyQueue = function() {
    this.in = [];
    this.out = [];
    this.in2out = function() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }
    }
};

MyQueue.prototype.push = function(x) {
    this.in.push(x);
};

MyQueue.prototype.pop = function() {
    this.in2out();
    return this.out.pop();
};

MyQueue.prototype.peek = function() {
    this.in2out();
    return this.out[this.out.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.out.length === 0 && this.in.length === 0;
};
```

## [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/description/)

**描述**

Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (`push`, `top`, `pop`, and `empty`).

**解题思路**

每次插入元素 x，都使 x 前的元素出队列再入队列，保证元素 x 在队列首部。

**代码实现**

```js
var MyStack = function() {
    this.queue = [];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
    let n = this.queue.length;
    while (n-- > 1) {
        this.queue.push(this.queue.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.queue.shift();
};

MyStack.prototype.top = function() {
    return this.queue[0];
};

MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};
```

## [155. Min Stack](https://leetcode.com/problems/min-stack/description/)

**描述**

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

**代码实现**

```js
var MinStack = function() {
    this.dataStack = [];
    this.minStack = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

MinStack.prototype.push = function(val) {
    this.dataStack.push(val);
    this.min = Math.min(this.min, val);
    this.minStack.push(this.min);
};

MinStack.prototype.pop = function() {
    this.dataStack.pop();
    this.minStack.pop();
    this.min = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Number.MAX_SAFE_INTEGER;
};

MinStack.prototype.top = function() {
    return this.dataStack[this.dataStack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
```

## [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

**描述**

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

**代码实现**

```js
    let stack = [];
    let n = s.length;
    for (let c of  s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;
            let val = stack.pop();
            let b1 = c === ')' && val !== '(';
            let b2 = c === '}' && val !== '{';
            let b3 = c === ']' && val !== '[';
            if (b1 || b2 || b3) return false;
        }
    }
    return stack.length === 0;
};
```

## [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)

**描述**

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

**解题思路**

在遍历数组时用栈将当前索引储存起来，如果当前遍历元素大于栈顶对应元素，则当前元素是栈顶元素的下一个比它大的数，并将将找到元素出栈。

**代码实现**

```js
var dailyTemperatures = function(T) {
    let n = T.length;
    let indexs = [];
    let ret = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (indexs.length > 0 && T[i] > T[indexs[indexs.length - 1]]) {
            let pre = indexs.pop();
            ret[pre] = i - pre;
        }
        indexs.push(i);
    }
    return ret;
};
```

## [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)

**描述**

Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return *the **next greater number** for every element in* `nums`.

The **next greater number** of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.

**解题思路**

与上题解题思想差不多，由于是循环数组，所以需重新进行一次数组遍历，找到比栈顶元素大的元素。

**代码实现**

```js
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let indexs = [];
    let ret = new Array(n).fill(-1);
    for (let i = 0; i < n * 2; i++) {
        let num = nums[i % n];
        while (indexs.length > 0 && num > nums[indexs[indexs.length - 1]]) {
            let pre = indexs.pop();
            ret[pre] = num;
        }
        if (i < n) {
            indexs.push(i);
        }
    }
    return ret;
};
```