import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import{ HttpClient } from '@angular/common/http';
import { Salary } from './salary';
import { Leaves } from './leaves';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  private url="http://localhost:81"

    constructor(private http:HttpClient,private router:Router) { }

//hr login 
    public loginUserFromRemote(user:User):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/loginuser",user)
    }

    public addHrFromRemote(user:User):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/addhr",user)
    }

  //add employee 
    public addEmployeeFromRemote(employee:Employee):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/addemployee",employee)
    }
    public getEmployeeFromRemote():Observable<Object>
    {
      //it will access httpclient
      //import httpClientModule in app.module.ts
      return this.http.get("http://localhost:81/employeereport")
    }

    public getCurrentEmployeeFromRemote(id:any):Observable<any>
    {
    
      return this.http.get(`${this.url}/editemployee/${id}`)
    }

    public editEmployeeFromRemote(employee:Employee):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/editemployee",employee)
    }

    public deleteEmployeeFromRemote(id:any):Observable<any>
    {
      console.log("in service id fetch "+id)
      return this.http.get(`${this.url}/deleteemployee/${id}`)
    }


  //employee leaves
    public addLeavesFromRemote(leaves:Leaves):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/addleaves",leaves)
    }

    public getLeavesFromRemote():Observable<Object>
    {
      return this.http.get("http://localhost:81/leavesreport")
    }

    public getCurrentLeaveFromRemote(id: number):Observable<any> 
    {
      return this.http.get(`${this.url}/editleaves/${id}`)
    }

    public editLeavesFromRemote(leaves:Leaves):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/editleaves",leaves)
    }

    public deleteLeavesFromRemote(lid:any):Observable<any>
    {
      console.log("in service lid fetch "+lid)
      return this.http.get(`${this.url}/deleteleaves/${lid}`)
    }
  

  //employee salary
 
    public addSalaryFromRemote(salary:Salary):Observable<Object>
    {
      return this.http.post("http://localhost:81/addsalary",salary)
    }

    public getSalaryFromRemote():Observable<Object>
    {
      return this.http.get("http://localhost:81/salaryreport")
    }

    public getCurrentSalaryFromRemote(sid: number):Observable<any> 
    {
      return this.http.get(`${this.url}/editsalary/${sid}`)
    }

    public editSalaryFromRemote(salary:Salary):Observable<any>
    {
      return this.http.post<any>("http://localhost:81/editsalary",salary)
    }

    public deleteSalaryFromRemote(sid:any):Observable<any>
    {
      console.log("in service lid fetch "+sid)
      return this.http.get(`${this.url}/deletesalary/${sid}`)
    }

    //search employee by email
    public searchEmpFromRemote(employee:any):Observable<any>
    {
      console.log("employee email at service "+employee.email);
      return this.http.get<any>("http://localhost:81/searchemail/"+employee.email);
    }
}
