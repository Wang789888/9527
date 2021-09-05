// pages/my/my.js
import {
  OrderModel
} from '../../models/OrdelModel.js'
let orderModel = new OrderModel();
Page({

  /**
  * 页面的初始数据
  */
  data: {
    userInfo: [],
    defaultImg: '../../images/my/header.png',
    orders: []
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this._init();
  },
  // 初始化
  _init: function () {
    //判断用户是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 获取订单信息
          orderModel.getOrderList(res => {
            this.setData({
              orders: res.result.data.data
            })
            console.log(this.data.orders)
          })

          // 获取用户信息  
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  // 获取页面订单ID，跳转到商品详情
  pay: function (event) {
    let id = orderModel.getDataSet(event, 'id')
    wx.navigateTo({
      url: '/pages/order/order?id=' + id
    })
  },
  // confirm: function(){
  // wx.showModal({
  //   title: '支付提示',
  //   content: '请到线下交易，我们会电话与您联系',
  //   success(res) {
  //     wx.switchTab({
  //       url: '/pages/my/my'
  //     })
  //   }
  // })
  // },
  // 用户信息获取
  getuserinfo: function (event) {
    this.setData({
      userInfo: event.detail.userInfo
    })
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
  }

})