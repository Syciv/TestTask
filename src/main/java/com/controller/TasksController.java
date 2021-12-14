package com.controller;

import com.dto.EmployeeDto;
import com.dto.TaskDto;
import com.repository.reps.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TasksController {

    private final TaskRepository taskRepository;

    @Autowired
    public TasksController(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public TaskDto addTask(@RequestBody TaskDto task){
        return taskRepository.insert(task);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public TaskDto redactTask(@RequestBody TaskDto task){
        return taskRepository.update(task);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<TaskDto> getAll(){
        return taskRepository.findAll();
    }

    @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
    public TaskDto getById(@PathVariable("id") Integer id){
        return taskRepository.findById(id);
    }

    @RequestMapping(value = "/user/{uid}", method = RequestMethod.GET)
    public List<TaskDto> getByUser(@PathVariable("uid") Integer uid){
        return taskRepository.findByUser(uid);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public TaskDto deleteId(@PathVariable("id") Integer id){
        return taskRepository.deleteById(id);
    }
}
