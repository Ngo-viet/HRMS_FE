import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule, TuiDialogModule, TuiNotificationModule } from '@taiga-ui/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';
import { EmployeereportComponent } from './employee/employeereport/employeereport.component';
import { LogoutComponent } from './logout/logout.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { SearchemployeeComponent } from './employee/searchemployee/searchemployee.component';
import { AddhrComponent } from './addhr/addhr.component';
import { ContractsComponent } from './contracts/contracts.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LeavesreportComponent } from './leaves/leavesreport/leavesreport.component';
import { AddleavesComponent } from './leaves/addleaves/addleaves.component';
import { AddsalaryComponent } from './salaryreport/addsalary/addsalary.component';
import { EditsalaryComponent } from './salaryreport/editsalary/editsalary.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddemployeeComponent,
    SalaryreportComponent,
    LeavesreportComponent,
    EmployeereportComponent,
    LogoutComponent,
    EditemployeeComponent,
    SearchemployeeComponent,
    AddhrComponent,
    ContractsComponent,
    MenuComponent,
    AddleavesComponent,
    AddsalaryComponent,
    EditsalaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
