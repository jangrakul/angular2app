/**
 * Created by jangrakul on 27/09/2016.
 */
import { Injectable } from '@angular/core';
import { Employee } from "../shared/states/employee";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

// import { EMPLOYEES } from "./mock-employees"; // Was only required when data was being received from mockService.

@Injectable()
export class EmployeeService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private employeesUrl = 'app/employees';  // URL to web api

    constructor(private http: Http) { }

    // Used Promise to allow asynchronous calls to webservice and still render the page
    // with a promise that the data will be rendered when available
    getEmployees(): Promise<Employee[]> {
        // return Promise.resolve(EMPLOYEES); // from a Mock Service
        // Following gets the employees list from an http server
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(response => response.json().data as Employee[])
            .catch(this.handleError);
    }

    /**
    getEmployeesSlowly(): Promise<Employee[]> {
        return new Promise<Employee[]>(resolve =>
            setTimeout(resolve, 3000)) // delay 2 seconds
            .then(() => this.getEmployees());
    }*/

    delete(id: number): Promise<void> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Employee> {
        return this.http
            .post(this.employeesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(employee: Employee): Promise<Employee> {
        const url = `${this.employeesUrl}/${employee.id}`;
        return this.http
            .put(url, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
            .then(employees => employees.find(employee=> employee.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for test demo only
        return Promise.reject(error.message || error);
    }
}