/**
 * Created by jangrakul on 27/09/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../shared/states/employee';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'my-employees',
    templateUrl: 'employees.component.html',
    styleUrls: [ 'employees.component.css' ]
})
export class EmployeesComponent implements OnInit {
    title: string = "All Employees";
    employees: Employee[];
    selectedEmployee: Employee;

    constructor(
        private router: Router,
        private employeeService: EmployeeService) { }

    getEmployees(): void {
        this.employeeService.getEmployees().then(employees => this.employees = employees);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.employeeService.create(name)
            .then(employee => {
                this.employees.push(employee);
                this.selectedEmployee = null;
            });
    }

    delete(employee: Employee): void {
        this.employeeService
            .delete(employee.id)
            .then(() => {
                this.employees = this.employees.filter(h => h !== employee);
                if (this.selectedEmployee === employee) { this.selectedEmployee = null; }
            });
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedEmployee.id]);
    }
}
