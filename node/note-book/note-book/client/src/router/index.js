import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        path:'/login',
        name:'/login',
        component:()=>import('../views/Login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path:'/register',
        name:'/register',
        component:()=>import('../views/Register.vue'),
        meta:{
            title:'注册'
        }
    },
    {
        path:'/noteClass',
        name:'/noteClass',
        component:()=>import('../views/NoteClass.vue'),
        meta:{
            title:'笔记分类'
        }
    },
    {
        path:'/noteList',
        name:'/noteList',
        component:()=>import('../views/NoteList.vue'),
        meta:{
            title:'笔记列表'
        }
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

// 全局的路由守卫
const whitePath=['/login','/register']
router.beforeEach((to,from,next)=>{ 
    document.title=to.meta.title
    if(!whitePath.includes(to.path)){
        // 看本地存储
        if(!localStorage.getItem('userInfo')){
            router.push('/login')
            return 
        }
    }
    next()
})

export default router