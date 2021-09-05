import {
  CloudRequest
} from '../utils/cloud-request.js'
class IndexModel extends CloudRequest {

  /**
   * 获取首页轮播
   */
  getBanner(callBack) {
    this.request({
      url: "getBanner",
      success: res => {
        callBack(res)
      }
    })
  }

  /**
   * 获取主题 
   */
  getTheme(callBack) {
    this.request({
      url: "getTheme",
      success: res => {
        callBack(res)
      }
    })
  }

  /**
   * 获取最新商品
   */
  getProductNew(callBack) {
    this.request({
      url: "getProductNew",
      success: res => {
        //回调函数，将数据抛给上层
        callBack(res)
      }
    })
  }
}

export {
  IndexModel
}