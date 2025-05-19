//下载相关包： npm i vue-router 
//创建一个路由器并暴露出去


//第一步 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//引入一个个可能要呈现的组件
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'



//第二步 创建路由器
const router =createRouter({    
    history:createWebHistory(),  //路由模式
    routes:[   //一个个的路由规则
        {
            path: '/',  //根路径
            redirect: '/home' // 访问根路径时自动跳转到 /home
        },
        {
            
            path:'/home',
            component:Home
        },
        {   
            name:'xinwen',
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        }
    ]
})


//暴露路由器，路由器的配置需要全局注册到 Vue 实例，要去main.ts引入
//main.ts 是入口文件，通过 app.use(router) 将路由注册为全局插件，使所有组件都能访问路由 API（如 $router、$route）和内置组件（如 <router-link>）
export default router
