package com.controller;

import com.dto.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.repository.reps.EmployeeRepository;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeesController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeesController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public EmployeeDto addEmployee(@RequestBody EmployeeDto empl){
        return employeeRepository.insert(empl);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public EmployeeDto redactEmployee(@RequestBody EmployeeDto empl){
        return employeeRepository.update(empl);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<EmployeeDto> getAll(){
        return employeeRepository.findAll();
    }

//    @RequestMapping(value = "/all/{field}", method = RequestMethod.GET)
//    public List<EmployeeDto> getAllSort(@PathVariable("field") String field){
//        return employeeRepository.findAll();
//    }

    @RequestMapping(value = "/{id}",  method = RequestMethod.GET)
    public EmployeeDto getById(@PathVariable("id") Integer id){
        return employeeRepository.findById(id);
    }

    @RequestMapping(value = "/chiefof/{id}",  method = RequestMethod.GET)
    public EmployeeDto getChiefById(@PathVariable("id") Integer id){
        return employeeRepository.findChiefById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public EmployeeDto deleteId(@PathVariable("id") Integer id){
        return employeeRepository.deleteById(id);
    }
}
