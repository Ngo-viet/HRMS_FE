import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  public baseUrl = "http://localhost:8080";

  constructor() { }

  // Common API methods can be added here if needed
}
