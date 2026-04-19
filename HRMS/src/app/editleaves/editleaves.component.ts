import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeavesService } from '../shared/service/leaves.service';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-editleaves',
  templateUrl: './editleaves.component.html',
  styleUrls: ['./editleaves.component.css']
})
export class EditleavesComponent implements OnInit {

  msg="";
  lid:number;
  leaves:any=new Leaves();
  constructor(private service: LeavesService,private router:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.lid = this.router.snapshot.params['lid'];
  
    this.service.getCurrentLeaveFromRemote(this.lid).subscribe(data => 
      {
       this.leaves = data;
       console.log("Leaves is fetch based on id "+this.lid)
       }, 
    error => console.log(error));
  }

  editLeaves(): void
  {
    this.service.editLeavesFromRemote(this.leaves).subscribe(
      data => {
        console.log("Leaves Updated Successfully ");
        this.msg="Leaves Updated Successfully"
        
      },
      error => {
        console.log("exception occured");
        this.msg="Something Went Wrong"

      }
    )
  }

}
