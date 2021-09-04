import Mock from 'mockjs'

const Random = Mock.Random;

// 购物车数据
var carlist = Mock.mock('/api/goods/getshopcarlist',{
  'message|5' : [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': _=>Random.ctitle(5, 10),  
    'add_time': '@now',
    'thumb_path': "@image('200x100', '#4A7BF7', 'Hello')",
    'sell_price|50-100':10,
    'market_price|100-200':10,
    'stock_quantity|100-200': 10,
    'goods_no':'@natural(1000)'
  }]
})

export default {carlist};