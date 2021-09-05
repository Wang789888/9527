package cn.sweet.entity;

import java.io.Serializable;

//实体类对象
public class Account implements Serializable {

    //属性
    private Integer id;
    private String backName;
    private String backPwd;

    //ALT + insert


    public Account() {
    }

    public Account(Integer id, String backName, String backPwd) {
        this.id = id;
        this.backName = backName;
        this.backPwd = backPwd;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBackName() {
        return backName;
    }

    public void setBackName(String backName) {
        this.backName = backName;
    }

    public String getBackPwd() {
        return backPwd;
    }

    public void setBackPwd(String backPwd) {
        this.backPwd = backPwd;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", backName='" + backName + '\'' +
                ", backPwd='" + backPwd + '\'' +
                '}';
    }
}
