/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../shared/states/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
    moduleId: module.id,
    selector: 'my-management',
    templateUrl: 'management.component.html',
    styleUrls: [ 'management.component.css' ]
})
export class ManagementComponent implements OnInit {

    title: string = "Management";
    employees: Employee[] = [];

    constructor(
        private router: Router,
        private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.employeeService.getEmployees()
            .then(employees =>
                this.employees = employees.slice(8,10));
    }

    gotoDetail(employee: Employee): void {
        let link = ['/detail', employee.id];
        this.router.navigate(link);
    }
}