import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import './assets/style/reset.css'

//  引入你需要的组件
import { Button } from 'vant';
//  引入组件样式
import 'vant/lib/index.css'

const app=createApp(App)
app.use(Button)
app.use(router)

.mount('#app')
