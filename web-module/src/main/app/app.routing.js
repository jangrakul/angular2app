/**
 * Created by jangrakul on 27/09/2016.
 */
"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var employees_component_1 = require('./employee/employees.component');
var employee_detail_component_1 = require('./employee/employee-detail.component');
var management_component_1 = require("./management/management.component");
var fileupload_component_1 = require("./fileupload/fileupload.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'detail/:id',
        component: employee_detail_component_1.EmployeeDetailComponent
    },
    {
        path: 'employees',
        component: employees_component_1.EmployeesComponent
    },
    {
        path: 'management',
        component: management_component_1.ManagementComponent
    },
    {
        path: 'fileupload',
        component: fileupload_component_1.FileUploadComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map