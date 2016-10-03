/**
 * Created by jangrakul on 27/09/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { EmployeesComponent}      from './employee/employees.component';
import { EmployeeDetailComponent }  from './employee/employee-detail.component';
import { ManagementComponent } from "./management/management.component";
import { FileUploadComponent } from "./fileupload/fileupload.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'detail/:id',
        component: EmployeeDetailComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'fileupload',
        component: FileUploadComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
