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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var task_service_1 = require("./task.service");
var TaskDetailComponent = (function () {
    function TaskDetailComponent(taskService, route, location) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
        this.title = "Task Details";
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.taskService.getTask(id)
                .then(function (task) { return _this.task = task; });
        });
    };
    TaskDetailComponent.prototype.save = function () {
        var _this = this;
        this.taskService.update(this.task)
            .then(function () { return _this.goBack(); });
    };
    TaskDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-task-detail',
            templateUrl: 'task-detail.component.html',
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.ActivatedRoute, common_1.Location])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map