package com.mhc.bi.domain;

/**
 * @author baiyan
 * @date 2018/09/14
 * @description 任务实例表(TaskInstance)：
 * id
 * 任务名称
 * 任务父依赖
 * 任务子依赖
 * 任务执行时间（如果执行时间是天那么默认凌晨0点执行）
 * name
 * in
 * out
 * gmt_create
 * status
 * executetime
 * paraments
 */
public class TaskInstance {
    private int id;
    private String name;
    private String input;
    private String output;
    private String gmtCreate;
    private String gmtModify;
    private int status;
    private String executeTime;
    private String executeDay;
    private String paraments;
    private String startTime;
    private String endTime;

    public TaskInstance() {

    }

    public TaskInstance(int id, String name, String input, String output, String gmtCreate, String gmtModify, int status, String executeTime, String executeDay, String paraments) {
        this.id = id;
        this.name = name;
        this.input = input;
        this.output = output;
        this.gmtCreate = gmtCreate;
        this.gmtModify = gmtModify;
        this.status = status;
        this.executeTime = executeTime;
        this.executeDay = executeDay;
        this.paraments = paraments;
    }

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

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(String gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public String getGmtModify() {
        return gmtModify;
    }

    public void setGmtModify(String gmtModify) {
        this.gmtModify = gmtModify;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getExecuteTime() {
        return executeTime;
    }

    public void setExecuteTime(String executeTime) {
        this.executeTime = executeTime;
    }

    public String getExecuteDay() {
        return executeDay;
    }

    public void setExecuteDay(String executeDay) {
        this.executeDay = executeDay;
    }

    public String getParaments() {
        return paraments;
    }

    public void setParaments(String paraments) {
        this.paraments = paraments;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTme(String endTime) {
        this.endTime = endTime;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
}