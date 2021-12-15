package com.dto;

import lombok.*;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class PostDto {
    private Integer Id;
    private String Name;
}