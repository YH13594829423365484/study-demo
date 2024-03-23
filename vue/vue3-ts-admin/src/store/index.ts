import { createStore } from 'vuex'

const state = {}
const actions = {}
const mutations = {}
const modules = {}

// 单一状态树 -> 分支  store.state.cart.items
export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    modules
})