import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from '../shared/service/leaves.service';

@Component({
  selector: 'app-leavesreport',
  templateUrl: './leavesreport.component.html',
  styleUrls: ['./leavesreport.component.css']
})
export class LeavesreportComponent implements OnInit {

  leaves:any
  constructor(private service:LeavesService,private router: Router,private router1:ActivatedRoute) { }

  lid = this.router1.snapshot.params['lid'];

  deleteLeaves(lid: number): void {
    this.service.deleteLeavesFromRemote(lid).subscribe(data => 
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

  ngOnInit(): void
  {
    this.service.getLeavesFromRemote().subscribe(data=>
      {
        this.leaves=data;
      });

      if(this.lid!=undefined)
      {
        console.log("lid from button "+this.lid)
        this.deleteLeaves(this.lid);
      }
  }

}
