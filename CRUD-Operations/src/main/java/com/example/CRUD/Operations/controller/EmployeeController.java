package com.example.CRUD.Operations.controller;

import com.example.CRUD.Operations.model.Employee;
import com.example.CRUD.Operations.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;
    @GetMapping
    public List<Employee> getAllEmployees()
    {return repository.findAll();}
}
