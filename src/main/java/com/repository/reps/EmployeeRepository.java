package com.repository.reps;

import com.dto.EmployeeDto;
import com.mapper.EmployeeRecordMapper;
import org.jooq.DSLContext;
import org.jooq.Result;
import org.jooq.codegen.maven.example.tables.records.EmployeesRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.repository.CRUDRepository;
import java.util.List;

import static org.jooq.codegen.maven.example.tables.Employees.EMPLOYEES;
import static org.jooq.codegen.maven.example.tables.Tasks.TASKS;


@Repository
public class EmployeeRepository implements CRUDRepository<EmployeeDto> {

    private final DSLContext dsl;

    @Autowired
    public EmployeeRepository(DSLContext dsl){
        this.dsl = dsl;
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

        return result == null ? null:
                result.map(r -> new EmployeeRecordMapper(this).map((EmployeesRecord) r));
    }

    @Override
    public List<EmployeeDto> findAll(){
        return dsl.selectFrom(EMPLOYEES)
                .fetch()
                .map(r -> new EmployeeRecordMapper(this).map((EmployeesRecord) r));
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
                .set(dsl.newRecord(EMPLOYEES, empl))
                .returning()
                .fetchOne()
                .into(EmployeeDto.class);
    }

    @Override
    public EmployeeDto deleteId(Integer Id){
        EmployeeDto empl = findById(Id);
        Boolean executed = dsl.deleteFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(Id))
                .execute() == 1;
        return empl;
    }

    public Integer findTaskNumById(Integer Id){
        return dsl.selectFrom(TASKS)
                .where(TASKS.EMPLOYEEID.equal(Id))
                .fetch().size();
    }
}


