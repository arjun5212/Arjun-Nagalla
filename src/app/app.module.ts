import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { WelcomeComponent } from './home/welcome.component';
import { EmployeeModule } from './employees/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'employees', pathMatch: 'full'},
        { path: '**', redirectTo: 'employees', pathMatch: 'full'}
    ]),
    EmployeeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
