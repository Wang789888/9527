package cn.sweet.utils;

import java.util.ArrayList;
import java.util.List;

//分页
public class PageBean<T> {  //type
    //当前页，大小 ，总记录数，总页数
    private Integer curPageNo;  //当前页
    private Integer pageSize = 3;//大小
    private Integer pageCount;//总记录
    private Integer totalPage;//总页数
    private List<T> list = new ArrayList<>(); //数据

    public PageBean() {
    }

    public PageBean(Integer curPageNo, Integer pageSize, Integer pageCount, Integer totalPage, List<T> list) {
        this.curPageNo = curPageNo;
        this.pageSize = pageSize;
        this.pageCount = pageCount;
        this.totalPage = totalPage;
        this.list = list;
    }

    public Integer getCurPageNo() {
        return curPageNo;
    }

    public void setCurPageNo(Integer curPageNo) {
        this.curPageNo = curPageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageCount() {
        return pageCount;
    }

    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }
    //设置总页数
    public Integer getTotalPage() {
        this.totalPage = this.pageCount / this.pageSize;
        return this.pageCount % this.pageSize == 0 ? this.totalPage : this.totalPage+1;
    }

   /* public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }
*/
    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }
}
