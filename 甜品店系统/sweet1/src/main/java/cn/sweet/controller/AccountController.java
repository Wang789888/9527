package cn.sweet.controller;


import cn.sweet.entity.Account;
import cn.sweet.service.AccountService;
import cn.sweet.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/account")
public class AccountController {

    //注入业务
    @Autowired
    private AccountService accountService;

    //查询 所有用户
    @RequestMapping("/findAll")
    public String findAll(HttpServletRequest request){
        System.out.println("表现层：查询所有用户。。。。。。。");
        List<Account> list = accountService.findAll();

        request.setAttribute("list",list);

        for (Account account : list) {
            System.out.println("account = " + account);
        }

        return "list";
    }

        /*后台登录  进入login页面*/

        @RequestMapping("/toLogin")
        public String toLogin(){
            return "login";
        }
        //后台登录
        @RequestMapping("/login")
        public String login(Account account,HttpServletRequest request){

            //获取值
            String backName = request.getParameter("backName");
            String backPwd= request.getParameter("backPwd");

            //调用业务方法，返回对象
            Account a = accountService.findByName(account.getBackName());


            if(a != null){
                if(!(a.getBackPwd().equals(backPwd))){
                    request.setAttribute("errorMsg", "您输入密码不正确！请重新登录");
                    return "login";
                }else {
                    request.getSession().setAttribute("account",a);
                    return "redirect:/account/index";
                }
            } else {
                request.setAttribute("errorMsg","您输入用户名错误！请重新登录");
                return "login";
            }
//            if(backName.equals(a.getBackName())&&backPwd.equals(a.getBackPwd())){
//                return "redirect:/account/index";
//            }else {
//                request.setAttribute("errorMsg","用户名或密码错误！！！");
//                return "login";
//            }

        }


        //后台的首页
        @RequestMapping("/index")
        public String index(){
            return "index";
        }

        //后台的首页
        @RequestMapping("/main")
        public String main(){
            return "main";
        }


}
