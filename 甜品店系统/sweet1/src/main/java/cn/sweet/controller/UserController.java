package cn.sweet.controller;

import cn.sweet.entity.User;
import cn.sweet.service.UserService;
import cn.sweet.utils.JsonResult;
import cn.sweet.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

//控制层
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /*--------------前端登录 -------------------*/
    @RequestMapping("/login")
    @ResponseBody
    public JsonResult login(@RequestBody User user){
        System.out.println("user = " + user);
        //调用业务的方法 返回对象
        User userByName = userService.findUserByName(user.getUname());

        if(userByName != null){//用户存在
            if(userByName.getPwd().equalsIgnoreCase(user.getPwd())){
                return JsonResult.ok(userByName);
            }else{
                return JsonResult.errorMsg("密码错误！！！");
            }
        }else{//不存在
            return JsonResult.errorMsg("此用户不存在！！1");
        }



    }


    //注册
    @RequestMapping("/register")
    @ResponseBody
    public JsonResult register(@RequestBody User user){
        System.out.println("------------------------->user = " + user);
        int row = userService.addUser(user);
        return JsonResult.ok();
    }


    @RequestMapping("/backList1")
    public ModelAndView backList(@RequestParam(defaultValue = "1") Integer curPage,
                                 @RequestParam(defaultValue = "") String content){//当前页，关键字
        ModelAndView mv1 = new ModelAndView();
        PageBean<User> pages = userService.pageQuery(curPage,content);
        mv1.addObject("pages",pages);
        List<User> users = pages.getList();
        for (User user: users ) {
            System.out.println(user);
        }
        mv1.setViewName("userlist");

        return mv1;
    }

    //删除
    @RequestMapping("/delete1")
    public  String delete(Integer uid,@RequestParam(defaultValue = "1")Integer curPage){
        userService.deleteUser(uid);
        return "redirect:/user/backList1?curPage="+curPage;
    }
}
