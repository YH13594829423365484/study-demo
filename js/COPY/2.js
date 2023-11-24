// let a ={
//     name:'yc'
// }

// Object.assign()  对象的拼接方法

let arr = [1,2,3,{n:10}]
let newArr = [].concat(arr)
// arr.push(4)
arr[3].n =100
console.log(newArr);


// let newArr =[...arr] 数组解构