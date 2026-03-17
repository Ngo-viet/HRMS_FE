import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrmsService } from '../hrms.service';
import { Salary } from '../salary';

@Component({
  selector: 'app-editsalary',
  templateUrl: './editsalary.component.html',
  styleUrls: ['./editsalary.component.css']
})
export class EditsalaryComponent implements OnInit {

  msg="";
  sid:number;
  salary:any=new Salary();
  constructor(private service: HrmsService,private router:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.sid = this.router.snapshot.params['sid'];
  
    this.service.getCurrentSalaryFromRemote(this.sid).subscribe(data => 
      {
       this.salary = data;
       console.log("Salary is fetch based on sid "+this.sid)
       }, 
    error => console.log(error));
  }

  public editSalary():void
  {
    this.service.editSalaryFromRemote(this.salary).subscribe(
      data => {
        console.log("Salary Updated Successfully ");
        this.msg="Salary Updated Successfully"
        
      },
      error => {
        console.log("exception occured");
        this.msg="Something Went Wrong"

      }
    )
  }

}
