import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddleavesComponent } from './addleaves/addleaves.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';
import { LeavesreportComponent } from './leavesreport/leavesreport.component';
import { EmployeereportComponent } from './employeereport/employeereport.component';
import { LogoutComponent } from './logout/logout.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EditsalaryComponent } from './editsalary/editsalary.component';
import { EditleavesComponent } from './editleaves/editleaves.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddhrComponent } from './addhr/addhr.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddemployeeComponent,
    AddleavesComponent,
    AddsalaryComponent,
    SalaryreportComponent,
    LeavesreportComponent,
    EmployeereportComponent,
    LogoutComponent,
    EditemployeeComponent,
    EditsalaryComponent,
    EditleavesComponent,
    SearchemployeeComponent,
    AddhrComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

