Parent.prototype.say = 'hello'
function Parent() {
  this.name = 'parent'
}

function Child() {
  Parent.call(this)      // this.name = 'parent'
  this.type = 'child'
}

let c = new Child()

console.log(c.say);

