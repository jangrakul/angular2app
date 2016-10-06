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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.tasksUrl = 'app/tasks'; // URL to web api
    }
    // Used Promise to allow asynchronous calls to webservice and still render the page
    // with a promise that the data will be rendered when available
    TaskService.prototype.getTasks = function () {
        // Following gets the tasks list from an http server
        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
    getTasksSlowly(): Promise<Task[]> {
        return new Promise<Task[]>(resolve =>
            setTimeout(resolve, 3000)) // delay 2 seconds
            .then(() => this.getTasks());
    }*/
    TaskService.prototype.delete = function (id) {
        var url = this.tasksUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    TaskService.prototype.create = function (headline) {
        return this.http
            .post(this.tasksUrl, JSON.stringify({ headline: headline }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TaskService.prototype.update = function (task) {
        var url = this.tasksUrl + "/" + task.id;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(function () { return task; })
            .catch(this.handleError);
    };
    TaskService.prototype.getTask = function (id) {
        return this.getTasks()
            .then(function (tasks) { return tasks.find(function (task) { return task.id === id; }); });
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for test demo only
        return Promise.reject(error.message || error);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map