import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddleavesComponent } from './addleaves/addleaves.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { EmployeereportComponent } from './employeereport/employeereport.component';
import { LeavesreportComponent } from './leavesreport/leavesreport.component';
import { LogoutComponent } from './logout/logout.component';
import { SalaryreportComponent } from './salaryreport/salaryreport.component';
import { EditleavesComponent } from './editleaves/editleaves.component';
import { EditsalaryComponent } from './editsalary/editsalary.component';
import {EditemployeeComponent} from './editemployee/editemployee.component'
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddhrComponent } from './addhr/addhr.component';



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
{path:'editleaves/:lid',component:EditleavesComponent},
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
