package com.repository.reps;

import com.dto.TaskDto;
import com.mapper.TaskRecordMapper;
import com.repository.CRUDRepository;
import org.jooq.DSLContext;
import org.jooq.codegen.maven.example.tables.records.TasksRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.jooq.codegen.maven.example.tables.Tasks.TASKS;

@Repository
public class TaskRepository implements CRUDRepository<TaskDto> {
    private final DSLContext dsl;
    private final TaskRecordMapper mapper;

    @Autowired
    public TaskRepository(DSLContext dsl, TaskRecordMapper mapper){
        this.dsl = dsl;
        this.mapper = mapper;
    }

    @Override
    public TaskDto insert(TaskDto task){
        return dsl.insertInto(TASKS)
                .set(dsl.newRecord(TASKS, task))
                .returning()
                .fetchOne()
                .into(TaskDto.class);
    }

    @Override
    public TaskDto findById(Integer id){
        return dsl.selectFrom(TASKS)
                .where(TASKS.ID.equal(id))
                .fetchOne()
                .map(r -> mapper.map((TasksRecord) r));
    }

    @Override
    public List<TaskDto> findAll(){
        return dsl.selectFrom(TASKS)
                .fetch()
                .map(r -> mapper.map((TasksRecord) r));
    }

    public List<TaskDto> findByUser(Integer uId){
        return dsl.selectFrom(TASKS)
                .where(TASKS.EMPLOYEEID.equal(uId))
                .fetch()
                .into(TaskDto.class);
    }

    @Override
    public TaskDto update(TaskDto task){
        return dsl.update(TASKS)
                .set(TASKS.DESCRIPTION, task.getDescription())
                .set(TASKS.PRIORITY,task.getPriority())
                .set(TASKS.EMPLOYEEID,task.getEmployeeid())
                .where(TASKS.ID.equal(task.getId()))
                .returning()
                .fetchOne()
                .into(TaskDto.class);
    }

    @Override
    public TaskDto deleteById(Integer Id){
        TaskDto task = findById(Id);
        Boolean executed = dsl.deleteFrom(TASKS)
                .where(TASKS.ID.equal(Id))
                .execute() == 1;
        return task;
    }


}
