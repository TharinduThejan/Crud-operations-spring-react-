package com.example.CRUD.Operations.controller;

import com.example.CRUD.Operations.exception.ResourceNotFoundException;
import com.example.CRUD.Operations.model.Employee;
import com.example.CRUD.Operations.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees()
    {return repository.findAll();

    }
    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return repository.save(employee);
    }
    //build get employee by REST API
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeByID(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found in id :"+id));
        return ResponseEntity.ok(employee);
    }
    //buid update Employee REST API
    @PutMapping("/{id}")
    public ResponseEntity<Employee>updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
        Employee updateEmployee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found in id :"+id));
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmailId(employeeDetails.getEmailId());

        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }
    //buiid delete employee REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable long id){
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not found in id :"+id));
        employeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

