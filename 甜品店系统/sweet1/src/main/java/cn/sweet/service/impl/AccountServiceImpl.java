package cn.sweet.service.impl;

import cn.sweet.dao.AccountDao;
import cn.sweet.entity.Account;
import cn.sweet.service.AccountService;
import cn.sweet.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//实现类
@Service("accountService")
public class AccountServiceImpl implements AccountService {

    //注入数据访问层对象
    @Autowired
    private AccountDao accountDao;

    @Override
    public List<Account> findAll() {

        System.out.println("业务层：查询所有用户。。。。。。");

        return accountDao.findAll();
    }

    @Override
    public void saveAccount(Account account) {

    }
    @Override
    public Account findByName(String backName) {

        return accountDao.findByName(backName);
    }


}
