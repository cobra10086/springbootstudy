package com.mhc.bi.controller;

import com.mhc.bi.domain.theadvisor.HueShell;
import com.mhc.bi.mapper.theadvisor.HueShellMapper;
import com.mhc.bi.service.HueShellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author baiyan
 * @date 2018/09/17
 * @description
 */
@RestController
@RequestMapping("/hueshell")

public class HueShellController {
    @Autowired
    private HueShellService hueShellService;

    @Autowired
    private HueShellMapper hueShellMapper;


    @GetMapping("select")
    public Object select() {
        return hueShellService.selectAll();
    }

    //将HueShell的内容导入到JobPlan和ShellContent,模拟提交操作 http://localhost:8080/hueshell/export?name=task1
    @GetMapping("submit")
    public String export(String name) {
        return hueShellService.submit(name);
    }

    //将HueShell的内容导入到JobPlan和ShellContent,模拟提交操作 http://localhost:8080/hueshell/export?name=task1
    @GetMapping("selecttest")
    public Object selectAllTest(String name) {
        return hueShellMapper.getAllTest();
    }
}