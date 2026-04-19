import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../user';
import { HrmsService } from '../../hrms.service';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  private baseUrl: string;

  constructor(private http: HttpClient, private hrmsService: HrmsService) {
    this.baseUrl = this.hrmsService.baseUrl;
  }

  // HR login
  public loginUserFromRemote(user: User): Observable<any> {
    // Mock login - always returns success for testing
    return of({ success: true, message: 'Login successful', user: user });
  }

  // Add HR
  public addHrFromRemote(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addhr`, user);
  }
}