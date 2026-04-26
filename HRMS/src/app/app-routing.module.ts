import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { EmployeereportComponent } from './employee/employeereport/employeereport.component';
import { LogoutComponent } from './logout/logout.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';
import {EditemployeeComponent} from './employee/editemployee/editemployee.component'
import { SearchemployeeComponent } from './employee/searchemployee/searchemployee.component';
import { AddhrComponent } from './addhr/addhr.component';
import { AddleavesComponent } from './leaves/addleaves/addleaves.component';
import { AddsalaryComponent } from './salaryreport/addsalary/addsalary.component';
import { LeavesreportComponent } from './leaves/leavesreport/leavesreport.component';
import { EditsalaryComponent } from './salaryreport/editsalary/editsalary.component';



const routes: Routes = [
{path:'' , component:LoginComponent} ,
{path:'dashboard',component:DashboardComponent},
{path:'addemployee',component:AddemployeeComponent},
{path:'addleaves',component:AddleavesComponent},
{path:'addsalary',component:AddsalaryComponent},
{path:'employeereport',component:EmployeereportComponent},
{path:'employeereport/:id',component:EmployeereportComponent},
{path:'leavesreport',component:LeavesreportComponent},
{path:'salaryreport',component:SalaryreportComponent},
{path:'editleaves/:lid',component:AddleavesComponent},
{path:'leavesreport/:lid',component:LeavesreportComponent},
{path:'editsalary/:sid',component:EditsalaryComponent},
{path:'salaryreport/:sid',component:SalaryreportComponent},
{path:'editemployee/:id',component:EditemployeeComponent},
{path:'searchemail',component:SearchemployeeComponent},
{path:'addhr',component:AddhrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
