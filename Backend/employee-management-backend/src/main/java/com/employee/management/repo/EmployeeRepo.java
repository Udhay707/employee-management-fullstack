package com.employee.management.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
	
}
