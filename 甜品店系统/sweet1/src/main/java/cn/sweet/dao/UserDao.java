package cn.sweet.dao;

import cn.sweet.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//数据访问层
@Repository
public interface UserDao {

    //登录
    public User  findUserByName(@Param("name") String name);

    //注册
    public int addUser(User user);

    //查询总记录数
    public long pageCount(@Param("uname") String uname);

    //分页查询
    public List<User> pageQuery(@Param("uname") String uname,
                                 @Param("start") Integer start,
                                 @Param("end") Integer end);

    //删除
    public void deleteUser(@Param("uid")Integer uid);

}
