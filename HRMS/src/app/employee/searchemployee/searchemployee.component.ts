import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee/employee.model';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

 
employee:any=new Employee();
msg: string = '';
//we always denote observable as $ so its identified
data$:any;
available:boolean= false;

  constructor(private http:HttpClient,private router:Router,private service:EmployeeService) { }

  ngOnInit(): void {
  }
  serachemployee()
  {
    console.log(this.employee);
    this.service.searchEmpFromRemote(this.employee).subscribe(
      (response: any)=>
      {
        this.data$=response;
        if(this.data$==null)
        {
          console.log("employee object is null")
          this.msg="Employee is not found";
          this.available=false;

        }
        else{
          this.available=true;
        }
        
        console.log("Return employee object: "+this.data$.firstName);
        console.log("Return employee object: "+this.data$.email);

      },
      (errors: any)=>{
        console.log("errors");

      }
    )
  }

}
