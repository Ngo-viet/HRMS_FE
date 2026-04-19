import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leaves } from '../../leaves';
import { HrmsService } from '../../hrms.service';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  private baseUrl: string;

  constructor(private http: HttpClient, private hrmsService: HrmsService) {
    this.baseUrl = this.hrmsService.baseUrl;
  }

  // Add leaves
  public addLeavesFromRemote(leaves: Leaves): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addleaves`, leaves);
  }

  // Get all leaves
  public getLeavesFromRemote(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/leavesreport`);
  }

  // Get current leave by id
  public getCurrentLeaveFromRemote(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/editleaves/${id}`);
  }

  // Edit leaves
  public editLeavesFromRemote(leaves: Leaves): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/editleaves`, leaves);
  }

  // Delete leaves
  public deleteLeavesFromRemote(lid: any): Observable<any> {
    console.log("in service lid fetch " + lid);
    return this.http.get(`${this.baseUrl}/deleteleaves/${lid}`);
  }
}