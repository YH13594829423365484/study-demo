function fn(arr) {
    const res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            res.unshift(arr[i])
        } else {
            res.push(arr[i])
        }
    }
    return res
}
//  优化
function newFn(arr) {
    const res1 = []
    const res2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            res2.push(arr[i])
        } else {
            res1.push(arr[i])
        }
    }
    return res1.concat(res2)
}
console.log(newFn([1, 0, 2, 0, 3, 0, 4, 0, 5, 0]));
