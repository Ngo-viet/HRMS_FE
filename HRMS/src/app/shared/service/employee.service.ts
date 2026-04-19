import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../employee/employee.model';
import { HrmsService } from '../../hrms.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string;

  constructor(private http: HttpClient, private hrmsService: HrmsService) {
    this.baseUrl = this.hrmsService.baseUrl;
  }

  // Add employee
  public addEmployeeFromRemote(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/addemployee`, employee);
  }

  // Get all employees
  public getEmployeeFromRemote(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/api/employeereport`);
  }

  // Get current employee by id
  public getCurrentEmployeeFromRemote(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/editemployee/${id}`);
  }

  // Edit employee
  public editEmployeeFromRemote(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/editemployee`, employee);
  }

  // Delete employee
  public deleteEmployeeFromRemote(id: any): Observable<any> {
    console.log("in service id fetch " + id);
    return this.http.get(`${this.baseUrl}/api/deleteemployee/${id}`);
  }

  // Search employee by email
  public searchEmpFromRemote(employee: any): Observable<any> {
    console.log("employee email at service " + employee.email);
    return this.http.get<any>(`${this.baseUrl}/api/searchemail/${employee.email}`);
  }
}