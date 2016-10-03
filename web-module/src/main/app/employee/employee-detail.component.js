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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var employee_service_1 = require("./employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeeService, route, location) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
        this.title = "Employee Details";
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.employeeService.getEmployee(id)
                .then(function (employee) { return _this.employee = employee; });
        });
    };
    EmployeeDetailComponent.prototype.save = function () {
        var _this = this;
        this.employeeService.update(this.employee)
            .then(function () { return _this.goBack(); });
    };
    EmployeeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-employee-detail',
            templateUrl: 'employee-detail.component.html',
            styleUrls: ['employee-detail.component.css']
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.ActivatedRoute, common_1.Location])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map