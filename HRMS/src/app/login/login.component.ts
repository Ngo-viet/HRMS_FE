import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../shared/service/hr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msg: string = '';

  constructor(
    private service: HrService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      this.service.loginUserFromRemote(this.loginForm.value).subscribe(
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
}
