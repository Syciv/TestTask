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

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeesController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public EmployeeDto addEmployee(EmployeeDto empl){
        return employeeRepository.insert(empl);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<EmployeeDto> getAll(){
        return employeeRepository.findAll();
    }

    @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
    public EmployeeDto getById(@PathVariable("id") Integer id){
        return employeeRepository.findById(id);
    }

    @RequestMapping(value = "/chiefof/{id}",  method = RequestMethod.GET)
    public EmployeeDto getChiefById(@PathVariable("id") Integer id){
        return employeeRepository.findChiefById(id);
    }
}
