import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    private _employeeUrl = 'http://localhost:53680/api/v1/employees';

    constructor(private _http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this._employeeUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEmployee(id: number): Observable<IEmployee> {
        console.log(id);
        return this.getEmployees()
            .map((employees: IEmployee[]) => employees.find(p => p.id === id));
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
