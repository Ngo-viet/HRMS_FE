import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  id:number;
  employee:any=new Employee();
  msg="";
  constructor(private service: HrmsService,private router:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.id = this.router.snapshot.params['id'];
  
    this.service.getCurrentEmployeeFromRemote(this.id).subscribe(data => 
      {
       this.employee = data;
       console.log("employee is fetch based on id "+this.id)
       }, 
    error => console.log(error));
  }

  editEmployee()
  {
    this.service.editEmployeeFromRemote(this.employee).subscribe(
      data => {
        console.log("Employee Updated Successfully ");
        this.msg="Employee Updated Successfully"
        
      },
      error => {
        console.log("exception occured");
        this.msg="Something Went Wrong"

      }
    )
  }

}
