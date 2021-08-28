// 入口文件
// console.log('OK')
import  Vue from 'vue'

//按需导入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

//导入App组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(app)
})