Function.prototype.myBind = function (context, ...args1) {
    const that=this
    return function fn(...args2){
        if(new.target){
            return new that(args1.concat(args2))
        }else{
            return that.apply(context,args1.concat(args2))
        }
    }
};


// 测试
function test(a, b, c) {
    console.log(this.name, a, b, c);
    return a + b + c;
}

const obj = { name: 'Alice' };

const boundTest = test.myBind(obj, 1, 2);
const result = boundTest(3);
console.log(result); // 输出: Alice 1 2 3 和 6

// 测试 new 调用
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const boundPerson = Person.myBind(null, 'Alice');
const person = new boundPerson(30);
console.log(person); // 输出: Person { name: 'Alice', age: 30 }