let arr = [2, 4, 5, 1, 3]  // [1, 2, 4, 5] 

// 认定第一个元素一定是有序的，从第二个元素开始，去找自己在前面已经有序的区间中的位置

function insertSort(arr) {
  const len = arr.length
  let temp;
  for (let i = 1; i < len; i++) {
    let j = i  // 3
    temp = arr[i]  // 1

    while(j > 0 && temp < arr[j - 1]) { // 找到temp能插队的位置
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp


  }
  return arr
}

console.log(insertSort(arr));