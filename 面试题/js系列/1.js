const arr = [1, 2, 3, 4, 5, 6, 7, 8,'A']

// const str = arr.join(', ');

// console.log(str); // 输出 "apple, banana, orange"

const Every = arr.every(element => {
    return element % 2 === 0; // 检查数组中所有元素是否都为偶数
});

console.log(Every); // 输出 true

 // 输出 -1 (未找到元素 5)
// const arr2 = [1, 2, 3]

// // // const arr2 = arr.splice(3, 0, 'M')
// const arr2 = arr.splice(0, 2)



// const arr2 = arr.slice(0, 2)


// const arr3 = arr.concat(arr2)
// console.log(arr3);

// const arr2 = arr.find((item, index, arr) => {
//   return item > 5
// })
// console.log(arr2);

// const  arr5 = arr.every((item, i, arr) => {
//   return item > 5
// })
// console.log(arr5);