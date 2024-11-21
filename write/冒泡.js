function fn(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isChange = false
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isChange = true
            }
            if (!isChange) break
        }
    }
    return arr
}
console.log(fn([3, 2, 1]));
