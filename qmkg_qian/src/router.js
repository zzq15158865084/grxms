import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'//首页
import head from './components/head.vue'//测试用head
import listen from './views/listen.vue'//听音乐组件listen
import login from './views/login.vue'//登录界面
import reg from './views/reg.vue'//注册界面
import vip from './views/vip.vue'//vip中心
import zhongxing from './views/zhongxing.vue'//个人中心界面
import Huodong from './views/Huodong.vue'//大赛界面
import Gongnen from './views/Gongnen.vue'//产品介绍
import Hdnair from './views/Hdnair.vue'//大赛详情界面


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: index},//首页
    {path:"/head",component:head},//页头
    {path:"/listen/:wid",component:listen,props:true},//听音乐
    {path: '/login',component: login},//登录
    {path: '/reg',component: reg},//注册
    {path: '/vip',component: vip},//vip中心
    {path: '/zhongxing/:uid',component:zhongxing,props:true},//他人中心
    {path: '/zhongxing',component:zhongxing},//个人中心
    {path: '/Huodong',component:Huodong},//大赛
    {path: '/Gongnen',component:Gongnen},//产品介绍
    {name:'Hdnair',path: '/Hdnair',component:Hdnair},//大赛详情
  ]
})
