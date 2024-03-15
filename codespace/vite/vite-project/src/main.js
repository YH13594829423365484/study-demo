import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import -> require()
// 前端在ES6之前是没有模块化的
// 所有的依赖关系全部打包完 bundler
// type module 只需加载需求的文件，不需要完全打包
createApp(App).mount('#app')
