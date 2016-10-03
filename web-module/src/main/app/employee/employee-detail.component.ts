/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../shared/states/employee';
import { EmployeeService } from "./employee.service";

@Component({
    moduleId: module.id,
    selector: 'my-employee-detail',
    templateUrl: 'employee-detail.component.html',
    styleUrls: [ 'employee-detail.component.css' ]
})
export class EmployeeDetailComponent implements OnInit {
    title: string = "Employee Details";
    employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.employeeService.getEmployee(id)
                .then(employee => this.employee = employee);
        });
    }

    save(): void {
        this.employeeService.update(this.employee)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}