package cn.sweet.service.impl;



import cn.sweet.dao.SnackDao;
import cn.sweet.entity.Snack;
import cn.sweet.service.SnackService;
import cn.sweet.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//实现类 业务层
@Service
public class SnackServiceImpl implements SnackService {

    @Autowired
    private SnackDao snackDao;

    /*手机端 */
    @Override
    public List<Snack> findSnackAll() {

        return snackDao.findSnackAll();
    }
    @Override
    public PageBean<Snack> pageQuery(Integer curPage, String content) {
        //当前页，大小，总记录数（查），总页数（算） ，集合（查）
        PageBean<Snack> pages = new PageBean<>();

        pages.setCurPageNo(curPage);
        pages.setPageSize(3);


        //获取总记录
        long count = snackDao.pageCount(content);

        pages.setPageCount((int)count);
        //计算起始和结束位置
        int start = (pages.getCurPageNo() - 1) * pages.getPageSize();
        int end = pages.getPageSize();

        //获取集合
        List<Snack> list = snackDao.pageQuery(content, start, end);

        pages.setList(list);


        return pages;
    }

    @Override
    public void saveSnack(Snack snack) {

        snackDao.saveSnack(snack);
    }

    @Override
    public Snack findByIdSnack(Integer sid) {

        return snackDao.findByIdSnack (sid);
    }

    @Override
    public void updateSnack(Snack snack) {

        snackDao.updateSnack (snack );
    }

    @Override
    public void deleteSnack(Integer sid) {

        snackDao.deleteSnack (sid);
    }


}
