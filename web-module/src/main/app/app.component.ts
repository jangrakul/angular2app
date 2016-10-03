/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component, OnInit } from '@angular/core';

import { Employee } from './shared/states/employee';

import { EmployeeService } from './employee/employee.service';

@Component({
    selector: 'my-webapp',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css'
    ],
    providers: [EmployeeService]
})

export class AppComponent implements OnInit {
    title = 'Mastek Team';
    selectedEmployee: Employee;
    employees: Employee[];

    constructor(private employeeService: EmployeeService) { }

    getEmployees(): void {
        // Use the promise way of getting data
        this.employeeService.getEmployees().then(employees => this.employees = employees);
        // this.employeeService.getEmployeesSlowly().then(employees => this.employees = employees);
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    ngOnInit(): void {
        this.getEmployees();
    }
}