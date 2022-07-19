/*
 * @lc app=leetcode.cn id=735 lang=typescript
 *
 * [735] 行星碰撞
 */

// @lc code=start
function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];
    for (const aster of asteroids) {
        let alive = true;
        while (alive && aster < 0 && stack.length && stack[stack.length - 1] > 0) {
            alive = stack[stack.length - 1] < -aster;
            if (stack[stack.length - 1] <= -aster) {
                stack.pop();
            }
        }
        if (alive) {
            stack.push(aster);
        }
    }
    return stack;
}
// @lc code=end
