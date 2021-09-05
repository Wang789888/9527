// 公共BaseModel
const cloud = require('wx-server-sdk');
cloud.init({
  //自身环境，默认的环境配置
  env: 'biyesheji-dtsea',
  //env:'formal-g9ej1',
  //是否在将用户访问记录到用户管理中，控制台可见
  traceUser: true,
});
//连接数据库
const db = cloud.database();
//   {
//   //获取测试环境数据库
//   env: 'biyesheji'
// });




/**
 * 查询处理 
 * @param  {object} model       集合名称
 * @param  {String} id          查询id
 * @return  {object|null}       查找结果
 */
const findById = (model, fields = {}, id) => {
  try {
    return db.collection(model)
      .doc(id)
      .field(fields)
      .get()
  } catch (e) {
    console.error(e)
  }
}


/**
 * 查询处理 带多条件的
 * @param  {object} model         集合名称
 * @param  {Object} [options={}]    查询条件
 * @param  {Number} [page]        开始记录数
 * @param  {Number} [size]        每页显示的记录数
 * @return  {object|null}         查找结果
 */
const query = (model, fields = {}, options = {}, page = 0, size = 10, order = {
  name: '_id',
  orderBy: 'asc'
}) => {
  try {
    return db.collection(model)
      .where(options)
      .field(fields)
      .skip(page)
      .limit(size)
      .orderBy(order.name, order.orderBy)
      .get()

  } catch (e) {
    console.error(e)
  }
}



/**
 * 新增处理
 * @param  {object} model  集合名称
 * @param  {object} params 参数
 * @return {object| null}  操作结果
 */
const add = (model, params) => {
  try {
    return db.collection(model).add({
      data: params
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 * 编辑处理
 * @param  {object} model      集合名称
 * @param  {object} params     参数
 * @return {object|null}       操作结果
 */
const update = (model, params) => {
  // let id = params._id
  // delete params._id
  try {
    return db.collection(model).doc(params._id)
      .update({
        data: params
      })

  } catch (e) {
    console.error(e);
  }
}

/**
 * 删除结果
 * @param  {object} model      集合名称
 * @param  {String} id         参数
 * @return {object|null}       操作结果
 */
const remove = (model, id) => {
  try {
    return db.collection(model).doc(id).remove()
  } catch (e) {
    console.error(e)
  }
}



module.exports = {
  query,
  findById,
  add,
  update,
  remove
}