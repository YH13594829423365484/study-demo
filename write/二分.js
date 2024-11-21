function fn(arr, target) {
    let left = 0, right = arr.length - 1
    arr.sort((a, b) => a - b)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else if (arr[mid] > target) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}
console.log(fn([7, 5, 0, 3, 1], 1));
