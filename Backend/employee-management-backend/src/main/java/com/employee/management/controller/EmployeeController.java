package com.employee.management.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.model.Employee;
import com.employee.management.repo.EmployeeRepo;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	EmployeeRepo employeeRepo;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepo.findAll();
	}
	
	@PostMapping("employees/add")
	public Employee addEmp(@RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}
	
	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployee(@PathVariable Integer id) {
		return employeeRepo.findById(id);
	}
	
	@PutMapping("employees/edit/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee emp) throws Exception{
		Employee employee = employeeRepo.findById(id).orElseThrow(()-> new Exception("Resource not found"));
		employee.setName(emp.getName());
		employee.setDesignation(emp.getDesignation());
		final Employee updatedEmp = employeeRepo.save(employee);
		return ResponseEntity.ok(updatedEmp);	
	}
	
	@DeleteMapping("/employees/{id}")
	public String deleteEmpByid(@PathVariable int id) throws Exception {
		Employee emp = employeeRepo.findById(id).orElseThrow(()-> new Exception("Employee not found"));
		employeeRepo.delete(emp);
		return "Deleted Succesfully";
	}
	
}
