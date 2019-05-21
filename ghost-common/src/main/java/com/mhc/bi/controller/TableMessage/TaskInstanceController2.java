package com.mhc.bi.controller.TableMessage;

import com.mhc.bi.Utils.JsonData;
import com.mhc.bi.common.ActionResult;
import com.mhc.bi.domain.theadvisor.TaskInstance;
import com.mhc.bi.exec.FlowControl;
import com.mhc.bi.service.TaskInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author baiyan
 * @date 2018/09/14
 * @description
 */
@RestController
@RequestMapping("/taskinstance")
public class TaskInstanceController2 {
    @Autowired
    private TaskInstanceService taskInstanceService;

    @Autowired
    private FlowControl flowControl;


    @GetMapping("insert")
    public Object insertTaskInstance() {
        TaskInstance taskInstance = new TaskInstance();
        taskInstance.setName("show_databases;");
        taskInstance.setExecuteTime("0,1,2,3,4,5,6");
        taskInstance.setInput("我是input");
        taskInstance.setInput("我是output");
        return JsonData.buildSuccess(taskInstanceService.insertTaskInstance(taskInstance));
    }


    @GetMapping("update")
    public Object updateShellContent() {
        TaskInstance taskInstance = new TaskInstance();
        taskInstance.setName("show_databases;");
        taskInstance.setInput("我是input_更新版本");
        taskInstance.setInput("我是output——更新版本");
        taskInstance.setExecuteTime("这里是更新时间的测试");
        return "更新了" + taskInstanceService.updateTaskInstance(taskInstance) + "条数据";
    }

    @GetMapping("delete")
    public Object delete() {
        TaskInstance taskInstance = new TaskInstance();
        taskInstance.setName("show_databases;");
        return taskInstanceService.deleteTaskInstance(taskInstance);
    }


    //手动生成任务实例，慎用
    @GetMapping("createTaskInstance")
    public void createTaskInstance() {
        taskInstanceService.createTaskInstance();
    }

    @GetMapping("/start1")
    public String start() {
        try {
            return flowControl.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "任务失败";
    }

    @GetMapping("getTotalCountByDate")
    public ActionResult getTotalCountByDate(String date) {
        ActionResult actionResult = new ActionResult();
        try {
            actionResult.setDataValue(taskInstanceService.getTotalCountByDate(date));
            actionResult.success();
        } catch (Exception e) {
            actionResult.fail();
            e.printStackTrace();
        }
        return actionResult;
    }

    @GetMapping("getTotalCountByFileName")
    public ActionResult getTotalCountByFileName(String name) {
        ActionResult actionResult = new ActionResult();
        try {
            actionResult.setDataValue(taskInstanceService.getTotalCountByFileName(name));
            actionResult.success();
        } catch (Exception e) {
            actionResult.fail();
            e.printStackTrace();
        }
        return actionResult;
    }


}