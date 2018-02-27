import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    empGroup: FormGroup;
    pageTitle: string = 'Employee List';
    empId: any;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    filteredEmployees: IEmployee[];
    employees: IEmployee[] = [];
    employee: IEmployee;

    constructor(
        private fb: FormBuilder,
        private _route: ActivatedRoute,
        private _employeeService: EmployeeService,
        private _router: Router
    ) {
        this.empGroup = fb.group({
            'employeeId' : ''
        });
    }

    ngOnInit(): void {

        this._employeeService.getEmployees()
                .subscribe(employees => {
                    this.employees = employees;
                    this.filteredEmployees = this.employees;
                },
                    error => this.errorMessage = <any>error);
    }

    getEmployee(id: number) {
        this._employeeService.getEmployee(id).subscribe(
          employee => this.employee = employee,
          error => this.errorMessage = <any>error);
        }

    onSubmit(post) {
        console.log(post.employeeId);
        if(post.employeeId != ''){
            this._router.navigate(['/employees',post.employeeId]);
        }
        this._employeeService.getEmployees()
                .subscribe(employees => {
                    this.employees = employees;
                    this.filteredEmployees = this.employees;
                },
                    error => this.errorMessage = <any>error);
    }
    
}
