// var str = 'hello world' // string 字符串
// var num = 123 // number 数字
// var flag = false // boolean 布尔
// var un = undefined 
// var n = null

// // 引用类型  对象
// var obj = {
//   name: '洋洋',
//   age: 18,
//   like: {
//     item1: 'eat'
//   }
// }

// // console.log(obj.name);

// var arr = ['a', 'b', 2, 'd']

// // arr[5] = true
// // arr.push(true)
// // arr.pop()
// // arr.unshift('hello')
// // arr.shift()

// // arr.splice(2, 1)
// // arr.splice(2, 0, false)

// // for (var i = 0; i < arr.length; i++) { // 遍历
// //   arr[i] = arr[i] + 1
// // }

// arr.forEach(function(item, index, arr) { // 回调
//   arr[index] = item + 1
// })

// console.log(arr);



// var arr = new Array(4).fill(1)  // arr = []
// console.log(arr);


var arr = [
    [1, 2, 3, 41, 5],
    [1, 2, 3, 42, 5],
    [1, 2, 3, 43, 5],
    [1, 2, 3, 44, 5],
    [1, 2, 3, 45, 5],
  ]
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      var newArr = [xxxxxxxx]
      arr[i][j] = arr[i][j] * 10
    }
  }
  
  console.log(arr);