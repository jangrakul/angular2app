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
/**
 * Created by jangrakul on 27/09/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var task_service_1 = require('./task.service');
var TaskListComponent = (function () {
    function TaskListComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
        this.title = "Tasks List";
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TaskListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    TaskListComponent.prototype.add = function (headline) {
        var _this = this;
        headline = headline.trim();
        if (!headline) {
            return;
        }
        this.taskService.create(headline)
            .then(function (task) {
            _this.tasks.push(task);
            _this.selectedTask = null;
        });
    };
    TaskListComponent.prototype.delete = function (task) {
        var _this = this;
        this.taskService
            .delete(task.id)
            .then(function () {
            _this.tasks = _this.tasks.filter(function (h) { return h !== task; });
            if (_this.selectedTask === task) {
                _this.selectedTask = null;
            }
        });
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent.prototype.gotoDetail = function (task) {
        this.router.navigate(['/detail', task.id]);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-tasks',
            templateUrl: 'task-list.component.html',
            styleUrls: ['task-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map