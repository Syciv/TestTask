package com.repository.reps;

import com.dto.EmployeeDto;
import com.dto.FilialDto;
import com.dto.PostDto;
import com.mapper.EmployeeRecordMapper;
import org.jooq.DSLContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.jooq.codegen.maven.example.tables.records.EmployeesRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.repository.CRUDRepository;
import java.util.List;

import static org.jooq.codegen.maven.example.tables.Employees.EMPLOYEES;
import static org.jooq.codegen.maven.example.tables.Tasks.TASKS;
import static org.jooq.codegen.maven.example.tables.Filials.FILIALS;
import static org.jooq.codegen.maven.example.tables.Posts.POSTS;


@Repository
public class EmployeeRepository implements CRUDRepository<EmployeeDto> {

    private final DSLContext dsl;
    private final EmployeeRecordMapper mapper;

    @Autowired
    public EmployeeRepository(DSLContext dsl){
        this.dsl = dsl;
        this.mapper =  new EmployeeRecordMapper(this);
    }

    @Override
    public EmployeeDto insert(EmployeeDto empl){
        return dsl.insertInto(EMPLOYEES)
                .set(dsl.newRecord(EMPLOYEES, empl))
                .returning()
                .fetchOne()
                .into(EmployeeDto.class);
    }

    @Override
    public EmployeeDto findById(Integer id){
        var result = dsl.selectFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(id))
                .fetchOne();

        return result == null ? null : result.into(EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> findAll(){
        return dsl.selectFrom(EMPLOYEES)
                .fetch()
                .map(r -> mapper.map((EmployeesRecord) r));
    }

    public EmployeeDto findChiefById(Integer Id){
        EmployeeDto empl = findById(Id);
        if(empl != null){
            EmployeesRecord result = dsl.selectFrom(EMPLOYEES)
                    .where(EMPLOYEES.ID.equal(empl.getChiefid()))
                    .fetchOne();
            return result==null ? null:result.into(EmployeeDto.class);
        }
        else return null;
    }

    @Override
    public EmployeeDto update(EmployeeDto empl){
        return dsl.update(EMPLOYEES)
                .set(EMPLOYEES.NAME, empl.getName())
                .set(EMPLOYEES.CHIEFID, empl.getChiefid())
                .set(EMPLOYEES.POSTID, empl.getPostid())
                .set(EMPLOYEES.FILIALID, empl.getFilialid())
                .where(EMPLOYEES.ID.equal(empl.getId()))
                .returning()
                .fetchOne()
                .into(EmployeeDto.class);
    }

    @Override
    public ResponseEntity<String> deleteById(Integer Id) {
        Integer taskNum = findTaskNumById(Id);
        if (taskNum > 0) {
            return new ResponseEntity<>("У сотрудника есть незавершённые задания.", HttpStatus.BAD_REQUEST);
        }
        Integer subsNum = findSubNumById(Id);
        if (subsNum > 0) {
            return new ResponseEntity<>("У сотрудника есть подчинённые.", HttpStatus.BAD_REQUEST);
        }
        EmployeeDto empl = findById(Id);
        Boolean executed = dsl.deleteFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(Id))
                .execute() == 1;
        return new ResponseEntity<>("Ок", HttpStatus.OK);
    }

    public Integer findTaskNumById(Integer Id){
        return dsl.selectFrom(TASKS)
                .where(TASKS.EMPLOYEEID.equal(Id))
                .fetch().size();
    }

    public Integer findSubNumById(Integer Id){
        return dsl.selectFrom(EMPLOYEES)
                .where(EMPLOYEES.CHIEFID.equal(Id))
                .fetch().size();
    }


    public String findFilialNameById(Integer Id){
        EmployeeDto empl = findById(Id);
        FilialDto filial = dsl.selectFrom(FILIALS)
                .where(FILIALS.ID.equal(empl.getFilialid()))
                .fetchOne()
                .into(FilialDto.class);
        return filial.getName();
    }

    public String findPostNameById(Integer Id){
        EmployeeDto empl = findById(Id);
        PostDto post = dsl.selectFrom(POSTS)
                .where(POSTS.ID.equal(empl.getPostid()))
                .fetchOne()
                .into(PostDto.class);
        return post.getName();
    }
}


