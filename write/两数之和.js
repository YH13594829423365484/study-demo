const nums = [2, 7, 11, 13]
const target = 9
function fn(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
// 用map优化
function newFn(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let count = target - nums[i]
        if (map.has(count)) {
            return [i, map.get(count)]
        } else {
            map.set(nums[i], i)
        }
    }
}
console.log(newFn(nums, target));
