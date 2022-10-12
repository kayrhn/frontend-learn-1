import Vue from "vue"
import VueRouter from "vue-router"
import welcome_home from '../view/welcome_home'
import Content from '../components/Content'




Vue.use(VueRouter);


  // 导出配置路由
export default new VueRouter({
    router: [
        {   
            // 路由路径
            path: '/content',
            // 跳转组件
            component: Content
            
        },
        {
            path:'/welcome_home',
            component: welcome_home
        }
    ]
  })