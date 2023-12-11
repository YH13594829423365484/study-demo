let arr = [2, 4, 5, 1, 3] // [1, 2, 3, 4, 5]

// arr.sort((a, b) => {
//   return b - a
// })
// console.log(arr);

function bubbleSort(arr) {
  // const res = []
  // while(arr.length) {
  //   let min = Math.min(...arr)
  //   res.push(min)
  //   let index = arr.indexOf(min)
  //   arr.splice(index, 1)
  // }
  // return res

  for (let i = 0; i < arr.length; i++) {
    // arr[i]  arr[i+1]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));