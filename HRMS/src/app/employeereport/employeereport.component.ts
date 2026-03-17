import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-employeereport',
  templateUrl: './employeereport.component.html',
  styleUrls: ['./employeereport.component.css']
})
export class EmployeereportComponent implements OnInit {

  //declaring employee class here
  employee: any;
  

  // in order to access myservice  i need to do dependancy injection
  constructor(private service: HrmsService, private router:Router,private router1:ActivatedRoute) { }


  id = this.router1.snapshot.params['id'];


  //i want to access all employee and display at beggining
  ngOnInit(): void {

    //subscribe is call back method which give you data
    this.service.getEmployeeFromRemote().subscribe(data => 
      {
      this.employee = data;
      });
      
      if(this.id!=undefined)
      {
        console.log("id from button "+this.id)
      this.service.deleteEmployeeFromRemote(this.id).subscribe(data => 
      {
      console.log("Employee Deleted Successfully ")
       this.router.navigate(['employeereport']);
      },
      error => 
      {
        console.log("exception occured");
        
      }
    )
      }
      
    

  }

}
