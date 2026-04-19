import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../../salary';
import { HrmsService } from '../../hrms.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private baseUrl: string;

  constructor(private http: HttpClient, private hrmsService: HrmsService) {
    this.baseUrl = this.hrmsService.baseUrl;
  }

  // Add salary
  public addSalaryFromRemote(salary: Salary): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addsalary`, salary);
  }

  // Get all salaries
  public getSalaryFromRemote(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/salaryreport`);
  }

  // Get current salary by id
  public getCurrentSalaryFromRemote(sid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/editsalary/${sid}`);
  }

  // Edit salary
  public editSalaryFromRemote(salary: Salary): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/editsalary`, salary);
  }

  // Delete salary
  public deleteSalaryFromRemote(sid: any): Observable<any> {
    console.log("in service sid fetch " + sid);
    return this.http.get(`${this.baseUrl}/deletesalary/${sid}`);
  }
}