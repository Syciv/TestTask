package com.repository.reps;

import com.dto.TaskDto;
import com.repository.CRUDRepository;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.jooq.codegen.maven.example.tables.Tasks.TASKS;

public class TaskRepository implements CRUDRepository<TaskDto> {
    private final DSLContext dsl;

    @Autowired
    public TaskRepository(DSLContext dsl){
        this.dsl = dsl;
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
                .into(TaskDto.class);
    }

    @Override
    public List<TaskDto> findAll(){
        return dsl.selectFrom(TASKS)
                .fetch()
                .into(TaskDto.class);
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
                .set(dsl.newRecord(TASKS, task))
                .returning()
                .fetchOne()
                .into(TaskDto.class);
    }

    @Override
    public Boolean deleteId(Integer Id){
        return dsl.deleteFrom(TASKS)
                .where(TASKS.ID.equal(Id))
                .execute() == 1;
    }


}
