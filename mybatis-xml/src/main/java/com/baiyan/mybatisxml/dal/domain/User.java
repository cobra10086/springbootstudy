package com.baiyan.mybatisxml.dal.domain;

/**
 * @Auther: peilongcheng
 * @Date: 2019/3/19 16:48
 * @Description:
 */
public class User {
    private int id;
    private String name;
    private String password;
    private String  createTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }
}
