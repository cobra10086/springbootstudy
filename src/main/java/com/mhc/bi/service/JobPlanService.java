package com.mhc.bi.service;

import com.mhc.bi.domain.theadvisor.JobPlan;
import com.mhc.bi.vo.PageMessage;

import java.util.List;

/**
 * @author baiyan
 * @date 2018/09/14
 * @description
 */
public interface JobPlanService {
    public List<JobPlan> selectAll();

    public int update(JobPlan jobPlan);

    public int delete(JobPlan jobPlan);

    public int insert(JobPlan jobPlan);

    public JobPlan selectJobPlan(String name);

    public JobPlan selectJobPlanByOutput(String output);

    public PageMessage select(int pageSize, int pageNo, String fileName, int orderByModifyTime);
}
