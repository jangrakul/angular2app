/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Task } from '../shared/states/task';
import { TaskService } from "./task.service";

@Component({
    moduleId: module.id,
    selector: 'my-task-detail',
    templateUrl: 'task-detail.component.html',
    //styleUrls: [ 'task-detail.component.css' ]
})
export class TaskDetailComponent implements OnInit {
    title: string = "Task Details";
    task: Task;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.taskService.getTask(id)
                .then(task => this.task = task);
        });
    }

    save(): void {
        this.taskService.update(this.task)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}