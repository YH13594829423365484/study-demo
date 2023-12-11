let arr = [2, 4, 5, 1, 3] // [1, 2, 5, 4, 3]

// 找出（选择）原数组区间中的最小值，放到区间的最前方，再缩小区间

// function selectSort(arr) {
//   const len = arr.length;
//   let minIndex;

//   for (let i = 0; i < len; i++) { // 收缩区间
//     minIndex = i

//     for (let j = i; j < len; j++) { // 找最小值
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j
//       }
//     }

//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }

//   }

//   return arr
// }


function selectSort(arr) {
  let i = 0, j = arr.length - 1;

  while(i < j) {
    let minIndex = betweenMin(i, j)
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    i++
  }

  function betweenMin(l, r) {
    // 返回左右指针区间中的最小值的下标

  }

}