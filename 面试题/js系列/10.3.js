// Parent.prototype.say = 'hello'
// function Parent() {
//   this.name = 'parent'
//   this.car = [1, 2]
// }

// Child.prototype = new Parent()
// function Child() {
//   Parent.call(this)
//   this.type = 'child'
// }

// let c = new Child()
// let c2 = new Child()

// c.car.push(3)

// console.log(c2.car);


function Car() {
  this.color = 'red'
  this.money = 55 
}

BMW.prototype = new Car() //将子类的原型指向父类的实例
function BMW() {
  Car.call(this)// 继承父类的实例属性
}

let BMWM2 = new BMW()


console.log(BMWM2.color);
console.log(BMWM2.money);