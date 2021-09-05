// pages/category/category.js
import {
  CategoryModel
} from '../../models/CategoryModel.js'
let category = new CategoryModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // menuCategories: [{
    //     category_name: '大理',
    //     category_type: 1
    //   },
    //   {
    //     category_name: '马来西亚',
    //     category_type: 2
    //   },
    //   {
    //     category_name: '杭州',
    //     category_type: 3
    //   },
    //   {
    //     category_name: '马尔代夫',
    //     category_type: 4
    //   },
    //   {
    //     category_name: '海南',
    //     category_type: 5
    //   },
    // ],
    menuSelect: 1, //页面加载默认第一个选中
    menuNmae: '',
    products: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._init()
  },
  // 初始化数据
  _init: function() {
    //获取初始化数据，将左边的分类、选择的分类和分类名重新赋值
    category.getCateGory(res => {
      let menuCategories = res.result.data.data
      let menuSelect = menuCategories[0].category_type
      let menuNmae = menuCategories[0].category_name
      this.setData({
        menuCategories,
        menuSelect,
        menuNmae
      })
      this._getCateGory(menuSelect)
    })

  },
  // 菜单切换
  menu: function (e) {
    //取出wxml菜单绑定的index值
    let index = category.getDataSet(e, "index")
    //赋值页面分类的data值
    let menuCategories = this.data.menuCategories
    //取出当前选中的分类类型
    let menuSelect = menuCategories[index].category_type
    //取出当前分类的名称
    let menuNmae = menuCategories[index].category_name
    //获取选中分类的数据
    this._getCateGory(menuSelect)
    //改变data的值
    this.setData({
      menuSelect,
      menuNmae
    })
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: '一生旅拍',
      desc: '',
      path: "page/index/index",
    }
  },
  // 跳转商品详情
  productDetails: function(e) {
    wx.navigateTo({
      url: '/pages/product/product?product_id=' + e.detail.productId,
    })
  },
  _getCateGory: function(type) {
    category.getCateGoryProduct(type, data => {
      console.log(type)
      console.log(data)
      this.setData({
        products: data.result.data.data
      })
    })
  }
})