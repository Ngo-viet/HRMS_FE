import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HrService } from '../shared/service/hr.service';
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
  msg: string = '';
  constructor(private service: HrService,private router:Router) { }

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
