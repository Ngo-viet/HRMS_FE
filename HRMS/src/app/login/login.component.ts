import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { HrmsService } from '../hrms.service';
import { User } from '../user';
import { ConnectableObservable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg="";
  constructor(private service: HrmsService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Log in successfully ");
        this.msg="Log in successfully"
        this.router.navigate(['/dashboard'])
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Crediential, Please Enter valid Data"

      }
    )
  }
}
