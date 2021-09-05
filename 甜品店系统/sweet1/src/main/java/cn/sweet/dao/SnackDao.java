package cn.sweet.dao;

import cn.sweet.entity.Snack;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//数据访问的接口
@Repository
public interface SnackDao {

    /*前台*/
    //查询所有
    public List<Snack> findSnackAll();

    //查询总记录数
    public long pageCount(@Param("title") String content);

    //分页查询
    public List<Snack> pageQuery(@Param("title") String content,
                                 @Param("start") Integer start,
                                 @Param("end") Integer end);

    //增加
    public void saveSnack(Snack snack);

    //通过Id获取对象
    public Snack  findByIdSnack(@Param("sid")Integer sid);

    //修改
    public void updateSnack(Snack snack);

    //删除
    public void deleteSnack(@Param("sid")Integer sid);



}
