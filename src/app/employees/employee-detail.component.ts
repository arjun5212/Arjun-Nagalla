import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  pageTitle: string = 'Employee Detail';
  errorMessage: string;
  employee: IEmployee;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEmployee(id);
    }
  }

  getEmployee(id: number) {
    this._employeeService.getEmployee(id).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/employees']);
  }

}
