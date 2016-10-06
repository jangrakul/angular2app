/**
 * Created by jangrakul on 27/09/2016.
 */
import { Injectable } from '@angular/core';
import { Task } from "../shared/states/task";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private tasksUrl = 'app/tasks';  // URL to web api

    constructor(private http: Http) { }

    // Used Promise to allow asynchronous calls to webservice and still render the page
    // with a promise that the data will be rendered when available
    getTasks(): Promise<Task[]> {
        // Following gets the tasks list from an http server
        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    /**
    getTasksSlowly(): Promise<Task[]> {
        return new Promise<Task[]>(resolve =>
            setTimeout(resolve, 3000)) // delay 2 seconds
            .then(() => this.getTasks());
    }*/

    delete(id: number): Promise<void> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(headline: string): Promise<Task> {
        return this.http
            .post(this.tasksUrl, JSON.stringify({headline: headline}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(task: Task): Promise<Task> {
        const url = `${this.tasksUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }

    getTask(id: number): Promise<Task> {
        return this.getTasks()
            .then(tasks => tasks.find(task=> task.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for test demo only
        return Promise.reject(error.message || error);
    }
}