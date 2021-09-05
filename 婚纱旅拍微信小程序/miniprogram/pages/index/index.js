// pages/index/index.js
import { IndexModel } from "../../models/IndexModel.js"
let indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //自动轮播
    interval: 3000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    circular: true,//是否采用衔接滑动 
    // themes: [
    //   { theme_icon: 'images/theme@1.png', theme_name: '全球旅拍', theme_type: 1 },
    //   { theme_icon: 'images/theme@2.png', theme_name: '旅拍摄影', theme_type: 2 },
    //   { theme_icon: 'images/theme@3.png', theme_name: '儿童摄影', theme_type: 3 },
    //   { theme_icon: 'images/theme@4.png', theme_name: '婚纱摄影', theme_type: 4 },
    // ],
   // banners: ['/images/temp/category.jpg.jpg','/images/temp/category.jpg.jpg'],
    banners:[],
    products: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._init()
  },
 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
        title: '一生旅拍',
        desc: '',
        path: "page/index/index",
      }
  },
  themeNavigation: function (event) {
    let theme_type = indexModel.getDataSet(event, "themetype")
    wx.navigateTo({
      url: '../theme/theme?theme_type=' + theme_type,
    })
  },
  _init: function () {
    //轮播图
    indexModel.getBanner(res => {
      console.log(res.result.data.data);
      this.setData({
        banners: res.result.data.data
      })
    })
    // 主题
    indexModel.getTheme(res => {
      this.setData({
        themes: res.result.data.data
      })
    })
    // 最新上线
    indexModel.getProductNew(res => {
      this.setData({
        products: res.result.data.data
      })
    })
  },
  // 跳转商品详情
  productDetails: function (event) {
    this._navProductDetail(event.detail.productId)
  },
  productBanner: function (event) {
    let product_id = indexModel.getDataSet(event, "productid")
    this._navProductDetail(product_id)
  },
  // 跳转详情
  _navProductDetail: function (product_id) {
    wx.navigateTo({
      url: '/pages/product/product?product_id=' + product_id,
    })
  }
})