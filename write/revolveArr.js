function help(arr, nums) {
    for (let j = 0; j < nums; j++) {
        for (let i = arr.length - 1; i > 0; i--) {
            let temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i - 1] = temp
        }
    }
    return arr
}
console.log(help([1, 2, 3, 4], 2));
