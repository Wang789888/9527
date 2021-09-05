package cn.sweet.service;



import cn.sweet.entity.Snack;
import cn.sweet.utils.PageBean;

import java.util.List;

//业务层
public interface SnackService {

    //查询所有
    public List<Snack> findSnackAll();

    //查询后端
    public PageBean<Snack> pageQuery(Integer curPage, String content);

    //保存
    public void saveSnack(Snack snack);

    //通过Id获取对象
    public Snack  findByIdSnack(Integer sid);

    //修改
    public void updateSnack(Snack snack);

    //删除
    public void deleteSnack(Integer sid);


}
