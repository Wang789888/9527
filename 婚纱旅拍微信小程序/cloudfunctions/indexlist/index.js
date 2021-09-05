// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  

  return rp(' http://localhost:8080/account/index?start=${event.start}&count=${event.count}')
    .then(function(res){
       console.log(res);
        return res;
    })
    .catch(function(err){
        console.log(err);
    });
}