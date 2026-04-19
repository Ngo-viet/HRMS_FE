import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { Employee } from '../../employee/employee.model';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee=new Employee();
  msg="";
  not_available=false;
  constructor(private service: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  addEmployee()
  {
    this.service.addEmployeeFromRemote(this.employee).subscribe(
      data => {
        console.log("Employee Added Successfully ");
        this.not_available=true;
        this.msg="Employee Added Successfully" 
      },
      error => {
        console.log("exception occured");
        this.msg="Email Address Allready Exists  !!!"
      
      }
    )
  }
  
}
