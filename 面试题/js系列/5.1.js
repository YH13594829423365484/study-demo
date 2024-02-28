Object.prototype.abc=123

let obj = {
    a:1,
    b:2
}

for (let key in obj) {
    console.log(key,obj[key])
}

console.log(obj.hasOwnProperty('a'));  //判断对象上是否显示具有某个属性


