package cn.sweet.entity;
//实体对象
public class Snack {

    private Integer sid;
    private String title;
    private String disc;
    private Double beforePrice;
    private Double afterPrice;
    private String tel;
    private String address;
    private String detail;
    private Integer saleNum;
    private String imgPath;

    public Snack() {
    }

    public Snack(Integer sid, String title, String disc, Double beforePrice, Double afterPrice, String tel, String address, String detail, Integer saleNum, String imgPath) {
        this.sid = sid;
        this.title = title;
        this.disc = disc;
        this.beforePrice = beforePrice;
        this.afterPrice = afterPrice;
        this.tel = tel;
        this.address = address;
        this.detail = detail;
        this.saleNum = saleNum;
        this.imgPath = imgPath;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDisc() {
        return disc;
    }

    public void setDisc(String disc) {
        this.disc = disc;
    }

    public Double getBeforePrice() {
        return beforePrice;
    }

    public void setBeforePrice(Double beforePrice) {
        this.beforePrice = beforePrice;
    }

    public Double getAfterPrice() {
        return afterPrice;
    }

    public void setAfterPrice(Double afterPrice) {
        this.afterPrice = afterPrice;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Integer getSaleNum() {
        return saleNum;
    }

    public void setSaleNum(Integer saleNum) {
        this.saleNum = saleNum;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    @Override
    public String toString() {
        return "Snack{" +
                "hid=" + sid +
                ", title='" + title + '\'' +
                ", disc='" + disc + '\'' +
                ", beforePrice=" + beforePrice +
                ", afterPrice=" + afterPrice +
                ", tel='" + tel + '\'' +
                ", address='" + address + '\'' +
                ", detail='" + detail + '\'' +
                ", saleNum=" + saleNum +
                ", imgPath='" + imgPath + '\'' +
                '}';
    }
}
