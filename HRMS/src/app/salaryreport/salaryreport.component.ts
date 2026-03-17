import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-salaryreport',
  templateUrl: './salaryreport.component.html',
  styleUrls: ['./salaryreport.component.css']
})
export class SalaryreportComponent implements OnInit {

  salary:any
  constructor(private service:HrmsService,private router: Router,private router1:ActivatedRoute) { }

  sid = this.router1.snapshot.params['sid'];
  
  ngOnInit(): void
  {
    this.service.getSalaryFromRemote().subscribe(data=>
      {
        this.salary=data;
 
      });

      if(this.sid!=undefined)
      {
        console.log("sid from button "+this.sid)
      this.service.deleteSalaryFromRemote(this.sid).subscribe(data => 
      {
      console.log("Employee Salary Deleted Successfully ")
       this.router.navigate(['salaryreport']);
      },
      error => 
      {
        console.log("exception occured");
        
      }
    )
      }
  }

}
