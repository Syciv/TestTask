package com.mapper;

import com.dto.TaskDto;
import com.repository.reps.EmployeeRepository;
import com.repository.reps.TaskRepository;
import org.jooq.RecordMapper;
import org.jooq.codegen.maven.example.tables.records.TasksRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TaskRecordMapper implements RecordMapper<TasksRecord, TaskDto>{
    private final EmployeeRepository employeeRepository;

    @Autowired
    public TaskRecordMapper(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public TaskDto map(TasksRecord record){
        TaskDto task = record.into(TaskDto.class);
        var employee = employeeRepository.findById(task.getEmployeeid());
        task.setEmployeename(employee.getName());
        return task;
    }
}
