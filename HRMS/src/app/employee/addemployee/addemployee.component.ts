import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addEmployeeForm: FormGroup;
  msg="";
  not_available=false;

  constructor(
    private service: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      mobile: ['', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  addEmployee() {
    if (this.addEmployeeForm.valid) {
      this.service.addEmployeeFromRemote(this.addEmployeeForm.value).subscribe(
        data => {
          console.log("Employee Added Successfully ");
          this.not_available=true;
          this.msg="Employee Added Successfully" 
        },
        error => {
          console.log("exception occured");
          this.msg="Email Address Allready Exists  !!!"
        }
      )
    }
  }
}
