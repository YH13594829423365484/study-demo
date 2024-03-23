# 后台管理系统

- 开发的产品类型
   - 用户前台 vue 单页应用
   - 后台api服务 接口
   前后端分离 
   - 后台管理系统
      - 开个权限吧 
      - 公司内部系统
         VUE3(proxy) + TS(类型约束/开发严谨/提升代码质量)
         +Element-Plus(UI组件) + 类库(echarts\axios\js-cookie\moment\sortable.js...)

- vite配置
   - vite 工程化脚手架
   - 短路经 allias
      @ -> src
      view -> src/views
      interface -> src/interface
      component -> src/components
   - 自动加载element-plus
   - @type/node
      - ts有类型系统
      - node path 没有类型系统  它是js时代的产物
      - string number + interface/type
      - 再安装一个 node 类型的补丁
      - vuex/vue-router ? @type/vuex?  用ts写出来的，自带类型系统
         vue3 99%用ts写的

- vue 2 和 3 的区别
   - 选项式API 和 组合式API
      - vue3 不需要this,拥抱函数式编程
      - 代码量大的话(200行+) data+methods+getters 相关的逻辑旋转跳跃000
      - componentsAPI 可以让 reactive/ref +method +onMountd 以业务为单位在一起
   - 响应式原理
      vue2 defineProperty(一次性代理完)  数组的索引变化无法被监听到  
      vue3  reactive 使用proxy 代理对象 有13种拦截方法 性能更好(懒代理)     
            ref es6面向对象的get set
            因为核心就是 拦截 + track(get) + trigger(set) + effect
   - v-if v-for 优先级
      <li v-if="item" v-for="item in list" ></li>
      vue3 修正了bug  v-if false 没必要渲染的

- weakmap理解
   依赖关系收集是靠全局的唯一的weakmap，以响应式对象为key，再是它的一些属性，proxy可以一次性代理 属性值用track收集的函数数组(effects),全部执行
   组件有很多，响应式对象很多，路由组件很多，当组件下线，路由切换了，有些响应式不用维护了，weakmap会在响应式对象被垃圾回收后自动删除相应的项
