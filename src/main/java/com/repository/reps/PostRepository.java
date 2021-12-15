package com.repository.reps;

import com.dto.PostDto;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import static org.jooq.codegen.maven.example.tables.Posts.POSTS;

import java.util.List;


@Repository
public class PostRepository {
    private final DSLContext dsl;

    @Autowired
    public PostRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    public List<PostDto> findAll(){
        return dsl.selectFrom(POSTS)
                .fetch()
                .into(PostDto.class);
    }

}