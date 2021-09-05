 import { CloudRequest } from '../utils/cloud-request.js'
class CartModel extends CloudRequest {
    _storageKeyName = 'cart';
    constructor() {
        super()
    };

    /**
     * 获取购物车数据
     * @param {*} callBack 
     * 获取后台数据的形式，采用 callBack 将处理的数据返回调用者
     */
    getCartData(callBack) {
        callBack(this.getCartDataFromLocal())
    }

    /**
     * 添加到购物车
     * @param {*} item 
     * @param {*} callBack 
     */
    add(item, counts, callBack) {
        callBack(this._localAdd(item, counts))
    }

    /**
     * 增加商品数量
     * @param {*} id 
     * @param {*} callBack 
     * 添加商品需要传入商品数据和商品数量，添加购物车的时候需要获取本地数据，判断本地是否有数据，如果为空则需要一个空数组否则直接添加会报错。检查当前商品是否最新，如果是最新的商品设置数量和选择的状态（默认新商品选中），否则就直接修改就商品的数量，更新本地缓存，返回数据
     */
    addCounts(id, callBack) {
        this._changeCounts(id, 1)
        callBack()
    }
    /**
     * 减少数量
     * @param {*} id 
     * @param {*} counts 
     * @param {*} callBack 
     * 增加商品数量和减少商品数量，每次点击的数量只能增加和减少 1 ，通过 _changeCounts 方法判断商品是否存在，修改数量，进行本地缓存更新
     */
    cutCounts(id, callBack) {
        this._changeCounts(id, -1)
        callBack()
    }

    /**
     * 删除商品
     * @param {*} ids 
     * @param {*} callBack 
     * 商品的删除主要通过商品的 id ，这里采用数组的形式这样一个或者多个都能直接删除
     */
    delete(ids, callBack) {
        callBack(this._delete(ids))
    }

    /********************* 下面本地数据  ***************************/

    /*本地缓存 保存／更新*/
    localSetStorageSync(data) {
        wx.setStorageSync(this._storageKeyName, data);
    }

    /**
     * 加入购物车
     * @param {*} item 商品
     * @param {*} counts 数量
     */
    _localAdd(item, counts) {
        let cartData = this.getCartDataFromLocal();
        if (!cartData) {
            cartData = []
        }
        let isproduct = this._checkProduct(item._id, cartData)
        //新商品
        if (isproduct.index == -1) {
            item.counts = counts
            item.selectStatus = true  //默认在购物车中为选中状态
            cartData.push(item)
        }
        //已有商品
        else {
            cartData[isproduct.index].counts += counts
        }
        this.localSetStorageSync(cartData)  //更新本地缓存
        return cartData;

    }

    getCartTotalCounts() {
        let data = this.getCartDataFromLocal()
        let counts = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].selectStatus) {
                counts++
            }
        }
        return counts
    };

    /*
    * 修改商品数目
    * params:
    * id - {int} 商品id
    * counts -{int} 数目
    * */
    _changeCounts(id, counts) {
        let cartData = this.getCartDataFromLocal()
        let hasInfo = this._checkProduct(id, cartData)
        if (hasInfo.index != -1) {
            if (hasInfo.data.counts >= 1) {
                cartData[hasInfo.index].counts += counts
            }
        }
        this.localSetStorageSync(cartData);  //更新本地缓存
    };

    /*
    * 获取购物车
    * param
    * flag - {boolean} 是否过滤掉不下单的商品
    */
    getCartDataFromLocal(flag) {
        let res = wx.getStorageSync(this._storageKeyName);
        if (!res) {
            res = []
        }
        //在下单的时候过滤不下单的商品，
        if (flag) {
            let newRes = [];
            for (let i = 0; i < res.length; i++) {
                if (res[i].selectStatus) {
                    newRes.push(res[i])
                }
            }
            res = newRes;
        }

        return res;
    };

    /*购物车中是否已经存在该商品*/
    _checkProduct(id, arr) {
        let item, result = { index: -1 };
        for (let i = 0; i < arr.length; i++) {
            item = arr[i];
            if (item._id == id) {
                result = {
                    index: i,
                    data: item
                }
                break;
            }
        }
        return result;
    }

    /*
   * 删除某些商品
   */
    _delete(ids) {
        if (!(ids instanceof Array)) {
            ids = [ids];
        }
        let cartData = this.getCartDataFromLocal()
        for (let i = 0; i < ids.length; i++) {
            let hasInfo = this._checkProduct(ids[i], cartData)
            if (hasInfo.index != -1) {
                cartData.splice(hasInfo.index, 1)  //删除数组某一项
            }
        }
        this.localSetStorageSync(cartData)
    }

}
export { CartModel }