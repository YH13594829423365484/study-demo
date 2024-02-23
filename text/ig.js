Function.prototype.myapply = function(context, argsArray) {
    context = context || window; // 如果未提供上下文，则默认为全局对象
    context.ID = this; // 将当前函数设置为上下文对象的一个属性
  
    // 构建参数列表字符串
    var args = [];
    for (var i = 0; i < argsArray.length; i++) {
      args.push('argsArray[' + i + ']');
    }
  
    // 调用函数
    var result = eval('context.ID(' + args + ')');
  
    // 清除添加的属性
    delete context.ID;
  
    return result;
  };

  function greet(greeting, punctuation) {
    console.log(greeting + ': ' + this.name + punctuation);
  }
  
  var obj = { name: '张三' };
  greet.myapply(obj, ['姓名',' 年龄:18']);  // 输出结果为——姓名: 张三 年龄:18