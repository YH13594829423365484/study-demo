- vue 深入语法
    <template>
        <div>
            <div>1</div>
            <div>2</div>
        </div>    
    </template>
    为什么要加这层div?
    vie->vn->node->外层节点->统一挂载
    统一外层节点 比较简单 方便的完成挂载
    缺点: 为了挂载而添加外层节点  vue2
    vue3 不用在外层添加节点
    Fragment 组件类型 文档碎片 document.createFragmentElement 
    node 的一种，起到容器的功能，自动消失

-  const obj = {
    a:{
        b:1
    }
} 
    const obj = reactive({a:b:1})


- vue 组件的类型 vnode的type值 tag它可以是 div|Component|文本|Fragment...
    Flag 位运算 
- vue compile 源码
- 重写响应式
    - vue2 defineProperty  es5 支持 兼容性好
        性能不好， 一次代理一个属性 用多次遍历  如果有深度的话那么一开始就要递归 性能开销很大
        数组 只支持 index 值修改， 不支持 增删移位
        新增的没有defineProperty 不会响应
        改写数组的push pop unshift ....方法 再添加 track 收集
    - vue3 proxy(reactive) + class 上的 getter 和 setter（ref）
        proxy 开销比较大(单个)  多个小的
        拦截 + effect(响应处理)     proxy + object      class get setter
        proxy 
        var obj={
            a:{
                b:2
            }
        }

        懒代理 obj.a proxy get object new Proxy

    - vue3 响应式更优秀
        - ref(class getter setter) + reactive(proxy 开销大)
            拦截 track trigger weakmap effect
        - proxy 可以一次代理整个对象，支持多达13种拦截方法
        - 懒代理 需要的时候，才做深层次的代理（访问时，而不是一开始），递归
        - defineProperty 一开始就要递归，遍历然后为一个个属性做代理，性能不好 但是兼容性好