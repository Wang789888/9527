// pages/product/product.js
import {  ProductModel } from '../../models/productModel.js'
import { CartModel } from '../../models/CartModel.js'
let productModel = new ProductModel()
let cartmodel = new CartModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,      // tab选项卡
    product: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let product_id = options.product_id
    this._init(product_id)
  },
  teltoUs: function () {
    wx.makePhoneCall({
      phoneNumber: '18392972275' 
    })
  },
  // 详情和参数切换
  clickTab: function (e) {
    const currentTab = e.currentTarget.dataset.current
    this.setData({
      currentTab
    })
  },
  _init: function (product_id) {
    // 获取商品信息，需要先拿到商品ID，通过id获取商品详情
    productModel.getProductById(product_id, res => {
      this.setData({
        product: res.result.data.data
      })
    })
  },
  // 购物车
  goCart: function () {
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  // 回到首页
  goHome: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 关注
  focus: function (e) {
    wx.showToast({
      icon: 'none',
      title: '暂未开通'
    })
  },
  joinCart: function () {

    cartmodel.add(this.data.product, 1, res => {
      wx.showToast({
        icon: "success",
        context: "添加成功"
      })
    })
  },
  immediately: function () {
    // 数量默认为1
    let count = 1
    wx.navigateTo({
      url: '../order/order?count=' + count + '&productId=' + this.data.product._id + '&from=product'
    });
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
})