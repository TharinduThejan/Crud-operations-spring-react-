package com.example.CRUD.Operations.controller;

import com.example.CRUD.Operations.model.Employee;
import com.example.CRUD.Operations.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;
    @GetMapping
    public List<Employee> getAllEmployees()
    {return repository.findAll();

    }
    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return repository.save(employee);
    }
}

