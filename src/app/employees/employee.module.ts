import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';

import { RouterModule } from '@angular/router';

import { EmployeeService } from './employee.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'employees', component: EmployeeListComponent },
        { path: 'employees/:id', component: EmployeeDetailComponent }
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  providers: [
    EmployeeService
    
  ]
})
export class EmployeeModule { }
