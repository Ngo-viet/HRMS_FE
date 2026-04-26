import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../shared/service/hr.service';
import { User } from '../user';

@Component({
  selector: 'app-addhr',
  templateUrl: './addhr.component.html',
  styleUrls: ['./addhr.component.css']
})
export class AddhrComponent implements OnInit {
  msg="";
  not_available=false;
  addHrForm: FormGroup;

  constructor(private service: HrService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addHrForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  addHr() {
    if (this.addHrForm.valid) {
      this.service.addHrFromRemote(this.addHrForm.value).subscribe(
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

}
