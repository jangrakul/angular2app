/**
 * Created by jangrakul on 05/10/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from "./fileupload.component";

const fileUploadRoutes: Routes = [
    {
        path: 'fileupload',
        component: FileUploadComponent
    }
];

export const fileuploadRouting: ModuleWithProviders = RouterModule.forChild(fileUploadRoutes);