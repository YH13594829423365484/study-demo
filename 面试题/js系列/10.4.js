// let parent = {
//   name: 'Tom',
//   firends: ['foo', 'bar', 'baz'],
//   age() {
//     return 18
//   }
// }

// let child = Object.create(parent)
// let child2 = Object.create(parent)

// child.firends.push('xyz')

// console.log(child2.firends);

let Car = {
  name: 'BMWi7',
  money: 150,
  abc:['a','b','c']
}
let car1 = Object.create(Car)//使用 Object.create()方法创建一个基于Car的新对象
let car2 = Object.create(Car)
car1.money = 100 // 修改car1对象的属性
car1.abc.push('d')//修改car1对象的属性（此时该属性为引用类型）

console.log(car1.money);//输出100
console.log(car2.money);//输出150
console.log(car1.abc);//输出['a','b','c','d']
console.log(car2.abc);//输出['a','b','c'，'d']