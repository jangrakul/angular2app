/**
 * Created by jangrakul on 27/09/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../shared/states/task';
import { TaskService } from './task.service';

@Component({
    moduleId: module.id,
    selector: 'my-tasks',
    templateUrl: 'task-list.component.html',
    styleUrls: [ 'task-list.component.css' ]
})
export class TaskListComponent implements OnInit {
    title: string = "Tasks List";
    tasks: Task[];
    selectedTask: Task;

    constructor(
        private router: Router,
        private taskService: TaskService) { }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    add(headline: string): void {
        headline = headline.trim();
        if (!headline) { return; }
        this.taskService.create(headline)
            .then(task => {
                this.tasks.push(task);
                this.selectedTask = null;
            });
    }

    delete(task: Task): void {
        this.taskService
            .delete(task.id)
            .then(() => {
                this.tasks = this.tasks.filter(h => h !== task);
                if (this.selectedTask === task) { this.selectedTask = null; }
            });
    }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }

    gotoDetail(task: Task): void {
        this.router.navigate(['/detail', task.id]);
    }
}
