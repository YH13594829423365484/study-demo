import { reactive,computed } from "vue";
class Store{
    constructor(options){
        this.$options = options; // 原来的对象 特别的属性   $options最初的状态
        // state reactive
        // 私有的对象
        this._state=reactive({
            data:options.state
        })
    }
    // 易用性
    get state(){
        // 业务
        return this._state.data;
    }
}
const createStore = (options) =>{
    // 实例化
    return new Store(options);

}

export {createStore}