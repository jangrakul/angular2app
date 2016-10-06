/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component, OnInit } from '@angular/core';

import { Task } from './shared/states/task';

import { TaskService } from './task/task.service';

@Component({
    selector: 'my-webapp',
    templateUrl: '/app/app.component.html',
    // styleUrls: ['/app/app.component.css'],
    providers: [TaskService]
})

export class AppComponent implements OnInit {
    title = 'Worklist';
    selectedTask: Task;
    tasks: Task[];

    constructor(private taskService: TaskService) { }

    getTasks(): void {
        // Use the promise way of getting data
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
        // this.taskService.getTasksSlowly().then(tasks => this.tasks = tasks);
    }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }

    ngOnInit(): void {
        this.getTasks();
    }
}