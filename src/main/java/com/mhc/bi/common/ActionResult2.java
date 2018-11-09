package com.mhc.bi.common;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author fangrui
 * @date 2018/10/18
 * @description 为2.3和2.4接口专门提供
 */
@Component
public class ActionResult2 {
    private boolean isTop;
    private boolean result;
    private Map<String, Object> dataMap;
    private List list;
    private Object dataValue;
    private int code;
    private String message;

    public ActionResult2() {
        this.isTop = false;
        this.result = false;
        this.code = 500;
        this.dataMap = new HashMap<>();
        this.list = new ArrayList();
        this.message = "失败";
    }

    public ActionResult2 success() {
        result = true;
        this.message = "成功";
        this.code = 200;
        return this;
    }

    public ActionResult2 success(String message) {
        result = true;
        this.message = message;
        this.code = 200;
        return this;
    }

    public ActionResult2 fail() {
        result = false;
        this.message = "失败";
        this.code = 500;
        return this;
    }

    public ActionResult2 fail(String message) {
        result = false;
        this.message = message;
        this.code = 500;
        return this;
    }


    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public Map<String, Object> getDataMap() {
        return dataMap;
    }

    public void setDataMap(Map<String, Object> dataMap) {
        this.dataMap = dataMap;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

    public Object getDataValue() {
        return dataValue;
    }

    public void setDataValue(Object dataValue) {
        this.dataValue = dataValue;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean getIsTop() {
        return this.isTop;
    }

    public void setIsTop(boolean top) {
        this.isTop = top;
    }
}