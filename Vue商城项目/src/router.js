import VueRouter from 'vue-router'

// 导入对应的路由
import HomeContainer  from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import Newslist from './components/news/Newslist.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoShare from './components/photo/photoShare.vue'
import Photoinfo from './components/photo/photoinfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/Goodsinfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment  from './components/goods/GoodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则
    { path: '/', component: HomeContainer },
    {path: '/home' ,component: HomeContainer},
    {path: '/member' ,component: MemberContainer},
    {path: '/shopcar' ,component: ShopcarContainer },
    {path: '/search' ,component: SearchContainer},
    {path:'/home/newslist',component: Newslist},
    {path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photoShare', component: PhotoShare },
    { path: '/home/photoinfo/:id', component: Photoinfo },
    { path: '/home/goodsList', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name:'goodsinfo'},
    { path: '/home/goodsdesc/:id', component: GoodsDesc,name:'goodsdesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment,name:'goodscomment' }
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router