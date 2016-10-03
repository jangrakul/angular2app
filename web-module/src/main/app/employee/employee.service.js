"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jangrakul on 27/09/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
// import { EMPLOYEES } from "./mock-employees"; // Was only required when data was being received from mockService.
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.employeesUrl = 'app/employees'; // URL to web api
    }
    // Used Promise to allow asynchronous calls to webservice and still render the page
    // with a promise that the data will be rendered when available
    EmployeeService.prototype.getEmployees = function () {
        // return Promise.resolve(EMPLOYEES); // from a Mock Service
        // Following gets the employees list from an http server
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
    getEmployeesSlowly(): Promise<Employee[]> {
        return new Promise<Employee[]>(resolve =>
            setTimeout(resolve, 3000)) // delay 2 seconds
            .then(() => this.getEmployees());
    }*/
    EmployeeService.prototype.delete = function (id) {
        var url = this.employeesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.create = function (name) {
        return this.http
            .post(this.employeesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.update = function (employee) {
        var url = this.employeesUrl + "/" + employee.id;
        return this.http
            .put(url, JSON.stringify(employee), { headers: this.headers })
            .toPromise()
            .then(function () { return employee; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.getEmployees()
            .then(function (employees) { return employees.find(function (employee) { return employee.id === id; }); });
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for test demo only
        return Promise.reject(error.message || error);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map