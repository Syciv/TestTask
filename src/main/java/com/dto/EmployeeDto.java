package com.dto;

import lombok.*;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class EmployeeDto {
    private Integer Id;
    private String Name;
    private Integer Filialid;
    private Integer Postid;
    private Integer Chiefid;

    private String Postname;
    private String Filialname;
    private String Chiefname;
    private Integer Tasksnum;
}
