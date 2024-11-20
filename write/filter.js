// filter方法接受一个回调函数作为参数，这个回调函数的第一个参数当前值，第二个参数是索引，第三个参数是数组本身
// filter的作用是过滤，将符合条件的元素过滤出来，它会创建一个新的数组，不会修改原始数组。
Array.prototype.myfilter = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i])
        }
    }
    return res
}
const res = [1, 2, 3]
const newRes = res.myfilter((value) => {
    return value > 2
})
console.log(newRes);
