/**
 * Created by kuldee103061 on 04/10/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
