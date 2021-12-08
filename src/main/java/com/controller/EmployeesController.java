package com.controller;

import com.dto.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.repository.reps.EmployeeRepository;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeesController {

    private final EmployeeRepository employeeCrud;

    @Autowired
    public EmployeesController(EmployeeRepository employeeCrud){
        this.employeeCrud = employeeCrud;
    }

    @RequestMapping(method = RequestMethod.POST)
    public EmployeeDto addEmployee(EmployeeDto empl){
        EmployeeDto added = employeeCrud.insert(empl);
        return added;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<EmployeeDto> getAll(){
        List<EmployeeDto> empList = employeeCrud.findAll();
        return  empList;
    }

    @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
    public EmployeeDto getById(@PathVariable("id") Integer id){
        EmployeeDto employee = employeeCrud.findId(id);
        return  employee;
    }
}
