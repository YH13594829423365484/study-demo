# 当函数被独立调用时this执行window

# 把一个对象的方法赋值出来之后调用，此时会被当成一个普通函数被调用，它的this指向window

# new构造函数创建一个实例对象，此时this指向实例对象

# 显示绑定call,apply,bind（bind会创建一个新的方法）

# 隐式丢失 obj1.obj2.obj3.fn() this会指向obj3