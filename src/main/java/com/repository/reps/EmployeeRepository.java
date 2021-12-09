package com.repository.reps;

import com.dto.EmployeeDto;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.repository.CRUDRepository;
import java.util.List;

import static org.jooq.codegen.maven.example.tables.Employees.EMPLOYEES;


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
        return dsl.selectFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(id))
                .fetchOne()
                .into(EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> findAll(){
        return dsl.selectFrom(EMPLOYEES)
                .fetch()
                .into(EmployeeDto.class);
    }

    public EmployeeDto findChiefById(Integer Id){
        EmployeeDto empl = findById(Id);
        return dsl.selectFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(empl.getChiefId()))
                .fetchOne()
                .into(EmployeeDto.class);
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
    public Boolean deleteId(Integer Id){
        return dsl.deleteFrom(EMPLOYEES)
                .where(EMPLOYEES.ID.equal(Id))
                .execute() == 1;
    }
}


