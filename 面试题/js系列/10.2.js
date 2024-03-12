// Parent.prototype.say = 'hello'
// function Parent() {
//   this.name = 'parent'
// }

// function Child() {
//   Parent.call(this)      // this.name = 'parent'
//   this.type = 'child'
// }

// let c = new Child()

// console.log(c.say);
function Car() {
  this.color = 'black'
  this.money = '50'
}
function BMW() {
  Car.call(this)
}

let BMW5 = new BMW()

console.log(BMW5.color);//输出 black
console.log(BMW5.money);//输出 50