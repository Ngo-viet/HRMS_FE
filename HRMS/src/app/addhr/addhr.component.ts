import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrmsService } from '../hrms.service';
import { User } from '../user';

@Component({
  selector: 'app-addhr',
  templateUrl: './addhr.component.html',
  styleUrls: ['./addhr.component.css']
})
export class AddhrComponent implements OnInit {
  msg="";
  not_available=false;
  user=new User();

  constructor(private service: HrmsService,private router:Router) { }

  ngOnInit(): void {
  }

  addHr()
  {
    this.service.addHrFromRemote(this.user).subscribe(
      data => {
        console.log("HR Added Successfully ");
        this.not_available=true;
        this.msg="HR Added Successfully" 
      },
      error => {
        console.log("exception occured");
        this.msg="Email Address Allready Exists  !!!"
      
      }
    )
  }

}
