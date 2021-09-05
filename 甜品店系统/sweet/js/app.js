window.app={
	/* 后端服务发布的url */
	serverUrl:"http://192.168.16.208:8080",
	/* 判断字符串是否为空 */
	
	isNotNull:function(str){
		if(str != null && str != "" && str != undefined){
			return true;
		}
		return false;
	},
	/* 封装消息提示框 */
	showMessage:function(msg,type){
		plus.nativeUI.toast(msg,
		{icon:"upload/"+type+".png",verticalAlign:"center"});
	},
	
	/* 保存用户信息全局对象 */
	setUserGlobalInfo:function(user){
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfoStr",userInfoStr);
	},
	
	/* 获取用户的全局对象 */
	getUserGlobalInfo:function(){
		var userInfoStr = plus.storage.getItem("userInfoStr");
		return JSON.parse(userInfoStr);
	},
	/* 注销 */
	userLogout:function(){
		plus.storage.removeItem("userInfoStr");
	}
}