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
import { HomeModule } from "./home/home.module";
import { TaskModule } from "./task/task.module";
import { CustomFileUploadModule } from "./fileupload/fileupload.module";

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HomeModule,
        TaskModule,
        CustomFileUploadModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}