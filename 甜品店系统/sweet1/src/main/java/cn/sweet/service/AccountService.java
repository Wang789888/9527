package cn.sweet.service;

import cn.sweet.entity.Account;
import org.apache.ibatis.annotations.Param;

import java.util.List;

//业务逻辑层接口
public interface AccountService {

    //查询所有
    public List<Account> findAll();
    //保存   //Alt+enter
    public void saveAccount(Account account);
    //登录
    public Account findByName(String backName);

}
