# vue3和vue2的区别
vue3更接近原生的js语法，而vue2则是将整个.vue文件的js部分划分为了data数据源，methode方法，生命周期，whatch,computed,将它们划分为一个个的小部分
vue3优化了diff算法
vue3速度快，体积小（tree sharking更彻底）
vue3通过proxy实现响应式，而vue2则是object.defineProperty()

# vue的事件修饰符
.stop：调用 event.stopPropagation()，阻止事件继续向上冒泡。
.prevent：调用 event.preventDefault()，阻止事件的默认行为。
.capture：使用事件捕获模式添加事件监听器，即在捕获阶段处理事件。
.self：只有当事件是从监听器绑定的元素本身触发时才触发回调。
.once：监听器将只触发一次，之后将被移除。
.passive：以 { passive: true } 方式添加事件监听器，意味着该事件处理程序不会调用 preventDefault 方法。