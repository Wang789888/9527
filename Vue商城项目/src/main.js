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

// 到入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站，肯定会调用main.js,在刚调用时，先从本地存储中，把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  // this.$store.state 来获取状态对象，以及通过 this.$store.commit 方法触发状态变更
  state:{ 
    car: car //购物车数据仓库
  },
  mutations:{ 
    // 点击购物车，把商品信息保存store中car上
    addToCar(state,goodsinfo){

      var flag = false

      state.car.some(item=>{
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      // 如果最终循环完毕得到flag 还是false,则把商品数据直接push到购物车中
      if(!flag){
        state.car.push(goodsinfo)
      }
      // 当更新car的时候，把car数组，存储到本地的localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){
      // 修改购物车中商品的数量值
      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      
       localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormCar(state,id){
      // 根据id，从store中的购物车中删除对应的商品数据
      state.car.some((item,i) =>{
        if (item.id == id) {
          state.car.splice(i , 1);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataGoodsSelected(state,info){
      state.car.some(item =>{
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    // 相当于计算属性
    getAllCount(state){
      var c = 0;
      state.car.forEach(item =>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
      var o = {}
      state.car.forEach(item =>{
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item =>{
        o[item.id] = item.selected
      })
      return 0
    },
    getGoodsCountAndAmount(state){
      var o ={
        count:0,
        amount:0
      }
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count
          o.count += item.price + item.count
        }
      })
      return o
    }
  }
})

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
  ShopcarData,
  store
})