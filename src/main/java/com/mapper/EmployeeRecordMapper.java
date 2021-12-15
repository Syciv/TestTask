package com.mapper;

import com.dto.EmployeeDto;
import com.repository.reps.EmployeeRepository;
import org.jooq.RecordMapper;
import org.jooq.codegen.maven.example.tables.records.EmployeesRecord;
import org.springframework.beans.factory.annotation.Autowired;


public class EmployeeRecordMapper implements RecordMapper<EmployeesRecord, EmployeeDto> {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeRecordMapper(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto map(EmployeesRecord record)
    {
        EmployeeDto empl = record.into(EmployeeDto.class);
        var chief = employeeRepository.findById(empl.getChiefid());
        empl.setChiefname(chief == null ? null: chief.getName());
        empl.setFilialname(employeeRepository.findFilialNameById(empl.getId()));
        empl.setPostname(employeeRepository.findPostNameById(empl.getId()));
        empl.setTasksnum(employeeRepository.findTaskNumById(empl.getId()));
        return empl;
    }
}
