// 滑动窗口
function fn(str) {
    const set = new Set()
    let left = 0, right = 0
    let maxLen = 0
    while (right < str.length) {
        if (!set.has(str[right])) {
            set.add(str[right])
            right++
            maxLen = Math.max(maxLen, right - left)
        } else {
            set.delete(str[left])
            left++
        }
    }
    return maxLen
}
console.log(fn('abcdeabcdabac'));
