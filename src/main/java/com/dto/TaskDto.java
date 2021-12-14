package com.dto;

import lombok.Data;

@Data
public class TaskDto {
    private Integer Id;
    private Integer Priority;
    private String Description;
    private Integer Employeeid;

    private String Employeename;
}
