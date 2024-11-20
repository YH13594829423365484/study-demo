# vue3和vue2的区别
vue3更接近原生的js语法，而vue2则是将整个.vue文件的js部分划分为了data数据源，methode方法，生命周期，whatch,computed,将它们划分为一个个的小部分
vue3优化了diff算法
vue3速度快，体积小（tree sharking更彻底）
vue3通过proxy实现响应式，而vue2则是object.defineProperty()