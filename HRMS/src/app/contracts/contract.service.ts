import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from './contract.model';
import { HrmsService } from '../hrms.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl: string;

  constructor(private http: HttpClient, private hrmsService: HrmsService) {
    this.baseUrl = this.hrmsService.baseUrl;
  }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.baseUrl}/api/contracts`);
  }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.baseUrl}/api/contracts/${id}`);
  }

  getContractsByEmployee(empId: number): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.baseUrl}/api/contracts/employee/${empId}`);
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.baseUrl}/api/contracts`, contract);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${this.baseUrl}/api/contracts/${id}`, contract);
  }

  deleteContract(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/contracts/${id}`);
  }
}
