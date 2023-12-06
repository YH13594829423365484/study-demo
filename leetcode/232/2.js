// 手写bind  args收集了所有的参数 rest 运算符  收起/展开

Function.prototype.myBind = function(context,...args) {
    // this -> context
    if(typeof this !== 'function'){//校验
    throw new TypeError("erroe");
    }
    context = context ||window
    const that = this; //func fn 提供了一个上下文 原函数的对象是谁？
    return function fn(...innerArgs) {
        return that.apply(context,[...args,...innerArgs]);
    }
}
let obj = {
    name:'yh'
}
const bindedFn = func.myBind(obj,1,2,3)
bindedFn()