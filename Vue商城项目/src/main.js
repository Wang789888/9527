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
// 设置请求根路径
// Vue.http.option.root = 'http://localhost:8080'
// 全局设置post时候表单数据的组织格式
// Vue.http.potion.emulateJSON = true

//按需导入Mint-UI中的组件
// import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
import MintUI from 'mint-ui'
Vue.use(MintUI)

// 导入mui的样式包
import './lib/mui/css/mui.min.css'
// 导入MUI的扩展图标样式包
// import './lib/mui/css/icons-extra.css'

// 安装图片预览插件
import VuePrevier from 'vue-preview'
Vue.use(VuePrevier)

// 导入mock数据
import HomeData  from './mock/HomeData'
import MemberData  from './mock/MemberData'
import SearchData from './mock/SearchData'
import ShopcarData  from './mock/ShopcarData'

//导入App组件
import app from './App.vue'

Vue.prototype.print = (res,type) => {
  type = type || "log";
  const log = JSON.parse(JSON.stringify(res));
  console[type](res)
}

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router, //1.4挂载路由对象到vm实例上
  HomeData,
  MemberData,
  SearchData,
  ShopcarData
})