import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-leavesreport',
  templateUrl: './leavesreport.component.html',
  styleUrls: ['./leavesreport.component.css']
})
export class LeavesreportComponent implements OnInit {

  leaves:any
  constructor(private service:HrmsService,private router: Router,private router1:ActivatedRoute) { }

  lid = this.router1.snapshot.params['lid'];
  ngOnInit(): void
  {
    this.service.getLeavesFromRemote().subscribe(data=>
      {
        this.leaves=data;
 
      });

      if(this.lid!=undefined)
      {
        console.log("lid from button "+this.lid)
      this.service.deleteLeavesFromRemote(this.lid).subscribe(data => 
      {
      console.log("Employee Leave Deleted Successfully ")
       this.router.navigate(['leavesreport']);
      },
      error => 
      {
        console.log("exception occured");
        
      }
    )
      }

      
  }

}
