// Parent.prototype.say = 'hello'
// function Parent(like) {
//   this.name = 'parent'
//   this.like = like
// }

// Child.prototype = Object.create(Parent.prototype) // {__proto__: Parent.prototype} 
// Child.prototype.constructor = Child
// function Child(like) {
//   Parent.call(this, like)
//   this.type = 'child'
// }


// let c1 = new Child('coding')

// console.log(c1.say);

Car.prototype.number = 1000  //在Car的原型上加一个number属性，值为1000
function Car( money) {
  this.color = 'black'
  this.money = money
}
function BMW(money) {
  Car.call(this,money) //继承Car的color和money属性
}

BMW.prototype = Object.create(Car.prototype)//建立了BMW对Car的原型链继承关系。
BMW.prototype.constructor = BMW//修复了constructor的指向，确保正确指向BMW构造函数。
let BMW5 = new BMW(50)

console.log(BMW5.number);//输出 1000
console.log(BMW5.money);//输出 50
