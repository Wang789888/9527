package cn.sweet.dao;

import cn.sweet.entity.Account;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//数据访问层接口
//@Mapper
@Repository
public interface AccountDao {

    //查询所有
    //@Select("select * from account")
    public List<Account> findAll();

    //保存
    public void saveAccount(Account account);

    //登录
    public Account findByName(@Param("backName") String backName);

}
