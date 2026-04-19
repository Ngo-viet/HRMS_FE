import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeavesService } from '../shared/service/leaves.service';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-addleaves',
  templateUrl: './addleaves.component.html',
  styleUrls: ['./addleaves.component.css']
})
export class AddleavesComponent implements OnInit {

  leaves=new Leaves();
  not_available=false;
  msg="";
  constructor(private service: LeavesService,private router:Router) { }

  ngOnInit(): void {
  }

  addLeaves()
  {
    this.service.addLeavesFromRemote(this.leaves).subscribe(
      data => {
        console.log("Leaves Added Successfully ");
        this.not_available=true;
        this.msg="Employee Leaves Added Successfully"
      },
      error => {
        console.log("exception occured");
        this.msg="Employee is not present with given Id"

      }
    )
  }
}
