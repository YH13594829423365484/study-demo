class Vue{
    constructor(options){
        this.$options = options
        this.$data = options.data

        observe(this.$data) //将this.$data变成响应式数据

        Proxy(this) //将data代理到this上

        new Compile(options.el,this)
    }
}

new Vue({
    el:'#app',
    data:function(){
        return {}
    },
    methods:{
      
    }
})