/**
 * Created by jangrakul on 05/10/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailComponent } from "./task-detail.component";
import { TaskListComponent } from "./task-list.component";

const taskRoutes: Routes = [
    {
        path: 'detail/:id',
        component: TaskDetailComponent
    },
    {
        path: 'tasks',
        component: TaskListComponent
    },
];

export const taskRouting: ModuleWithProviders = RouterModule.forChild(taskRoutes);