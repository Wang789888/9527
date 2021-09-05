package cn.sweet.test;

import cn.sweet.dao.AccountDao;
import cn.sweet.entity.Account;
import cn.sweet.service.AccountService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

//测试
public class SSMTest {

    @Test
    public void testSpring(){

        ApplicationContext cxt = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");

        AccountService accountService = (AccountService) cxt.getBean("accountService");

        accountService.findAll();
    }

    @Test
    public void testMybatis(){
            //加载配置文件    Ctrl+Alt+t
        try {
            //输入流
            InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
            //获取工厂
            SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(is);
            //获取session

            SqlSession session = factory.openSession();


            AccountDao mapper = session.getMapper(AccountDao.class);

            List<Account> list =   mapper.findAll();

            for (Account account : list) {
                System.out.println("------->account = " + account);
            }

            session.commit();
            session.close();

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

}
