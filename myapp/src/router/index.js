import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import user from '../views/user.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
Vue.use(VueRouter) 
//1.创建路由组件
//2. 将路由与组件进行映射
//3.创建router实例
const routes=[
    {
        path:'/',
        component:Main,
        redirect:'/home',//重定向
        children:[
            { path:'home',component:home },//首页
            { path:'user',component:user },//用户管理
            { path:'mall',component:Mall },//商品管理
            { path:'page1',component:PageOne },//商品管理
            { path:'page2',component:PageTwo },//商品管理
        ]
    }
  
]
const router = new VueRouter({
    routes:routes
})
export default router

