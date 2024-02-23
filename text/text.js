Function.prototype.mycall = function(context) {
    context = context || window; // 如果未提供上下文，则默认为全局对象
    context.ID = this; // 将当前函数设置为上下文对象的一个属性
    // 获取传入的参数
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }
    // 调用函数
    var result = eval('context.ID(' + args + ')');
    // 清除添加的属性
    delete context.ID;
    return result;
  };

  function greet(greeting) {
    console.log(greeting + ':' + this.name);
  }
  
  var obj = { name: '张三' };
  greet.mycall(obj, '姓名');  // 输出结果-- 姓名:张三