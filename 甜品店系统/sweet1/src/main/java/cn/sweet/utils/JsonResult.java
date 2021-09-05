package cn.sweet.utils;


//自定义响应数据结构

public class JsonResult {
    //响应的状态  200
    private Integer status;
    //响应的消息
    private String msg;
    //响应的数据
    private Object data;
    //构造
    public JsonResult() {
    }

    public JsonResult(Object data) {
        this.status = 200;
        this.msg = "OK";
        this.data = data;
    }

    public JsonResult(Integer status, String msg, Object data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    //自定义方法
    public static JsonResult build(Integer status, String msg, Object data){
        return  new JsonResult(status,msg,data);
    }
    public static JsonResult ok(Object data){
        return  new JsonResult(data);
    }
    public static JsonResult ok(){
        return new JsonResult(null);
    }

    //错误
    public static JsonResult errorMsg(String msg){
        return new JsonResult(500,msg,null);
    }
    public static JsonResult errorMsg(Object data){
        return new JsonResult(501,"error",data);
    }

    //get/set


    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
