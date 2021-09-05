package cn.sweet.controller;



import cn.sweet.entity.Snack;
import cn.sweet.service.SnackService;
import cn.sweet.utils.JsonResult;
import cn.sweet.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

//控制层
@Controller
@RequestMapping("/snack")
public class SnackController {

    @Autowired
    private SnackService snackService;

    @RequestMapping("/list")
    @ResponseBody
    public JsonResult findAll(){
        System.out.println("---->前端的列表   findAll");

        List<Snack> list = snackService.findSnackAll();

        return JsonResult.ok(list);

    }

    /*------------------后台-----------------------*/
    @RequestMapping("/backList")
    public ModelAndView backList(@RequestParam(defaultValue = "1") Integer curPage,
                                 @RequestParam(defaultValue = "") String content){//当前页，关键字
        ModelAndView mv = new ModelAndView();
        PageBean<Snack> pages = snackService.pageQuery(curPage,content);
        mv.addObject("pages",pages);
        mv.setViewName("list");

        return mv;
    }

    //增加页面
    @RequestMapping("/add")
    public String add(){
        return "add";
    }

    //保存
    @RequestMapping("/save")
    public String save(HttpServletRequest request, Snack snack, MultipartFile file){

        if(file != null){
            //获取上传文件名
            String fileName = file.getOriginalFilename();
            System.out.println("-------------------------------------->fileName = " + fileName);
            snack.setImgPath(fileName);//保存
            //请求对象获取真实路径  upload/fileNmae  \  /
            String filePath = request.getSession().getServletContext().getRealPath("upload");

            File target = new File(filePath+File.separator+fileName);
            try{
                file.transferTo(target);//上传成功
            }catch (IOException e){
                e.printStackTrace();
            }

        }
        //调用业务层方法实现保存
        snackService.saveSnack(snack);

        return  "redirect:/snack/backList";
    }

        //获取id得到当前对象
        @RequestMapping("/toUpdate")
        public String toUpdate(Integer sid,HttpServletRequest request){

            Snack snack = snackService.findByIdSnack(sid);
            request.setAttribute("snack",snack);

            return "update";

        }



        //修改
        @RequestMapping("/update")
        public String update(HttpServletRequest request,Snack snack,MultipartFile file){

            if(file != null){
                //获取上传文件名
                String fileName = file.getOriginalFilename();
                System.out.println("-------------------------------------->fileName = " + fileName);
                snack.setImgPath(fileName);//保存
                //请求对象获取真实路径  upload/fileNmae  \  /
                String filePath = request.getSession().getServletContext().getRealPath("upload");

                File target = new File(filePath+File.separator+fileName);
                try{
                    file.transferTo(target);//上传成功
                }catch (IOException e){
                    e.printStackTrace();
                }

            }
            //进行修改
            snackService.updateSnack(snack);

            return "redirect:/snack/backList";
        }



    //删除
        @RequestMapping("/delete")
        public  String delete(Integer sid,@RequestParam(defaultValue = "1")Integer curPage){
            snackService.deleteSnack(sid);
            return "redirect:/snack/backList?curPage="+curPage;
        }




}
