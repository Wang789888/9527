import Mock from 'mockjs'

const Random = Mock.Random;

// 轮播图数据
var lunBoTu = Mock.mock('/api/getlunbo',{
  'message|3' : [{
    //属性 url 是一个随机的url
    'url': '@url',
    //属性 image 是一个随机图片 参数分别为size, background, text
    'img': "@image('200x100', '#4A7BF7', 'Hello')",
  }]
})
// 新闻资讯列表数据
var newsLists = Mock.mock('/api/getnewslist',{
   'message|10' : [{
     // 属性 id 是一个自增数，起始值为 1，每次增 1
     'id|+1': 1,
     'title': _=>Random.ctitle(5, 10),  
     'date': '@date("yyyy-MM-dd")',
     'zhaiyao': '@paragraph(1, 3)',
     'click': 1,
     'image_url':_=>Random.dataImage('200x100', 'Hello Mock.js!'),
     'content':_=>Random.ctitle(2, 10), 
   }]
})
// 图片分享数据(点击首页上的“图片分享”后进入到的列表数据)
var photoLists = Mock.mock('/api/getimages',{
  'message| 10':[{
    'id|+1':1,
    'title': _=>Random.ctitle(5, 10), 
    'image_url': "@image('200x100', '#4A7BF7', 'Hello')",
    'zhaiyao ': '@paragraph(1, 3)', 
  }]
})
//图片分类
var imgcategory = Mock.mock('/api/getimgcategory',{
  'message|8':[{
    'id|+1':1,
    'title':_=>Random.ctitle(4), 
  }]
})
//图片详情
var photo = Mock.mock('/api/getthumimages',{
  'message | 10':[{
    'id|+1':1,
    'img': "@image('200x100', '#4A7BF7', 'Hello')",
  }]
})

//获取商品列表数据
var goodlist = Mock.mock('/api/getgoods',{
  'message|10' : [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': _=>Random.ctitle(5, 10),  
    'add_time': '@now',
    'zhaiyao': '@cparagraph(1, 3)',
    'click':1,
    'img': "@image('200x100', '#4A7BF7', 'Hello')",
    'sell_price|50-100':10,
    'market_price|100-200':10,
    'stock_quantity|100-200': 10,
    'content':'@ctitle(5)',
    'goods_no':'@natural(1000)',
  }]
})

export default {lunBoTu,newsLists,photoLists,imgcategory,photo,goodlist};