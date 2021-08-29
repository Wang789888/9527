// 入口文件
// console.log('OK')
import  Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)
// 1.3导入自己的router模块
import router from './router'

// 2.1导入vue-resource
import VueResource from 'vue-resource'
// 2.2安装vue-resource
Vue.use(VueResource)

//按需导入Mint-UI中的组件
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入mui的样式包
import './lib/mui/css/mui.min.css'
// 导入MUI的扩展图标样式包
// import './lib/mui/css/icons-extra.css'

// 导入mock数据
import HomeData  from './mock/HomeData'
import MemberData  from './mock/MemberData'
import SearchData from './mock/SearchData'
import ShopcarData  from './mock/ShopcarData'

//导入App组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router, //1.4挂载路由对象到vm实例上
  HomeData,
  MemberData,
  SearchData,
  ShopcarData
})