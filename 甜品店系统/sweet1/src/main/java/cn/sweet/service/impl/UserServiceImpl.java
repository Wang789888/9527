package cn.sweet.service.impl;

import cn.sweet.dao.UserDao;
import cn.sweet.entity.User;
import cn.sweet.service.UserService;
import cn.sweet.service.UserService;
import cn.sweet.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    //注入dao
    @Autowired
    private UserDao userDao;

    @Override
    public User findUserByName(String name) {
        return userDao.findUserByName(name);
    }

    @Override
    public int addUser(User user) {
        return userDao.addUser(user);
    }

    @Override
    public PageBean<User> pageQuery(Integer curPage, String content) {
        //当前页，大小，总记录数（查），总页数（算） ，集合（查）
        PageBean<User> pages = new PageBean<>();

        pages.setCurPageNo(curPage);
        pages.setPageSize(3);


        //获取总记录
        long count = userDao.pageCount(content);

        pages.setPageCount((int)count);
        //计算起始和结束位置
        int start = (pages.getCurPageNo() - 1) * pages.getPageSize();
        int end = pages.getPageSize();

        //获取集合
        List<User> list1 = userDao.pageQuery(content, start, end);

        pages.setList(list1);


        return pages;
    }

        @Override
        public void deleteUser(Integer uid) {
            userDao.deleteUser (uid);
        }


}
