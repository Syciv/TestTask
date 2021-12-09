package com.dto;

import lombok.*;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class EmployeeDto {
    private Integer Id;
    private String Post;
    private String Name;
    private String Filial;
    private Integer ChiefId;
}
