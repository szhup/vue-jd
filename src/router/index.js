import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import bai from '@/page/baitiao'
import licai from '@/page/licai'
import zhong from '@/page/zhongchou'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/bai',
            component: bai
        },
        {
            path: '/licai',
            component: licai
        },
        {
            path: '/zhong',
            component: zhong
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
