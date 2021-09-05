package cn.sweet.service;

import cn.sweet.entity.User;
import cn.sweet.utils.PageBean;

import java.util.List;

//业务层的接口
public interface UserService {


    //登录
    public User findUserByName(String name);

    //注册
    public int addUser(User user);

    //查询后端
    public PageBean<User> pageQuery(Integer curPage, String content);

    //删除
    public void deleteUser(Integer uid);

}
