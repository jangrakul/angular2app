/**
 * Created by jangrakul on 27/09/2016.
 */
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
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee/employee.service');
var AppComponent = (function () {
    function AppComponent(employeeService) {
        this.employeeService = employeeService;
        this.title = 'Mastek Team';
    }
    AppComponent.prototype.getEmployees = function () {
        var _this = this;
        // Use the promise way of getting data
        this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
        // this.employeeService.getEmployeesSlowly().then(employees => this.employees = employees);
    };
    AppComponent.prototype.onSelect = function (employee) {
        this.selectedEmployee = employee;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-webapp',
            templateUrl: '/app/app.component.html',
            styleUrls: ['/app/app.component.css'
            ],
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map