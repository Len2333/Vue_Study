//下载相关包： npm i vue-router 
//创建一个路由器并暴露出去


//第一步 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//引入一个个可能要呈现的组件
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import details from '../pages/details.vue'



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
            component:News,
            children:[
                {
                    path:'details',  //路径就是/news/details，这里不需要自己在前面加/
                    component:details
                }

            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})


//暴露路由器，要去main.ts引入
export default router
