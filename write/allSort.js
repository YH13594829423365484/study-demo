function fn(str) {
    const res = []
    if (str.length <= 1) {
        return [str]
    }
    for (let i = 0; i < str.length; i++) {
        let value = str[i]
        let newStr = str.slice(0, i) + str.slice(i + 1)
        let newStrValue = fn(newStr)
        for (let j = 0; j < newStrValue.length; j++) {
            res.push([value].concat(newStrValue[j]))
        }
    }
    return res
}
console.log(fn("abc"));
