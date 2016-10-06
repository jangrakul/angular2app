/**
 * Created by jangrakul on 27/09/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task/task.service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.title = 'Worklist';
    }
    AppComponent.prototype.getTasks = function () {
        var _this = this;
        // Use the promise way of getting data
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
        // this.taskService.getTasksSlowly().then(tasks => this.tasks = tasks);
    };
    AppComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-webapp',
            templateUrl: '/app/app.component.html',
            // styleUrls: ['/app/app.component.css'],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map