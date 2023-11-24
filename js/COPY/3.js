let onj = {
    name:'万星星',
    age:18,
    a:{
        n:1
    },
    
}
// console.log(obj);
// let str = JSON.stringify(obj) //对象转字符串
// console.log(JSON.parse(obj));  //字符串去除''
let obj2 = JSON.parse(JSON.stringify(obj)); // 深拷贝
obj.a.n =11
console.log(obj2);
