/**
 * Created by jangrakul on 03/10/2016.
 */

import { NgModule } from "@angular/core";
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TaskDetailComponent } from "./task-detail.component";
import { TaskListComponent } from "./task-list.component";
import { TaskService } from "./task.service";
import { taskRouting } from "./task.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        taskRouting
    ],
    declarations: [
        TaskDetailComponent,
        TaskListComponent
    ],
    providers: [
        TaskService
    ]
})

export class TaskModule {

}