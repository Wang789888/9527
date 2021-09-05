// pages/about/about.js
Page({
  data: {
    latitude: 34.34847418169231,    //纬度
    longitude: 107.1604809165001,   //经度
    covers: [{
      latitude: 34.34847418169231,
      longitude: 107.1604809165001,
    }],
    markers: [{
      latitude: 25.060327,
      longitude: 116.410711,

    }],
    accuracy: 16,
    thumb: '',
    nickname: '',
    orders: [{},
    {}],
    hasAddress: false,
    address: {}
  },
  onLoad() {

  },
  onShow() {

  },
  //http://lbs.qq.com/tool/getpoint/ 坐标拾取器
  click: function (e) {
    wx.openLocation({
      latitude: 34.34847418169231,
      longitude: 107.1604809165001,
      scale: 18,
      name: '一生旅拍',
      address: '陕西省西安市'
    })
  },
  teltoUs: function () {
    wx.makePhoneCall({
      phoneNumber: '18392972275' 
    })
  },
  onShareAppMessage: function () {
    return {
      title: '一生旅拍',
      desc: '',
      path: "page/index/index",
    }
  },

  btnClick: function () {

    console.log("按钮被点击了！"),

      this.setData({ text: "按钮点击后的数据" })
  }
})