/**
 * Created by jangrakul on 27/09/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared/service/in-memory-data.service';

import { AppComponent }  from './app.component';
import { EmployeeDetailComponent} from './employee/employee-detail.component';
import { EmployeesComponent} from './employee/employees.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from "./home/home.component";
import { ManagementComponent } from "./management/management.component";
import { FileUploadComponent } from "./fileupload/fileupload.component";

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeeDetailComponent,
        EmployeesComponent,
        ManagementComponent,
        FileUploadComponent
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }