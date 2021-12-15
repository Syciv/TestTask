package com.controller;

import com.dto.PostDto;
import com.repository.reps.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostsController {

    private final PostRepository postRepository;

    @Autowired
    public PostsController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<PostDto> getAll(){
        return postRepository.findAll();
    }
}