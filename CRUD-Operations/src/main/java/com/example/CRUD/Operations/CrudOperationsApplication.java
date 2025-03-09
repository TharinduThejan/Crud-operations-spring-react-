package com.example.CRUD.Operations;

import com.example.CRUD.Operations.model.Employee;
import com.example.CRUD.Operations.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudOperationsApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CrudOperationsApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;


	@Override
	public void run(String... args) throws Exception {
		Employee employee=new Employee();
		employee.setFirstName("John");
		employee.setLastName("Smith");
		employee.setEmailId("john.smith@gmail.com");
		employeeRepository.save(employee);
	}
}