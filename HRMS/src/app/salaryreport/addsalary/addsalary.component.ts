import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../../shared/service/salary.service';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {

  addSalaryForm: FormGroup;
  msg = "";

  constructor(
    private service: SalaryService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addSalaryForm = this.fb.group({
      eid: ['', Validators.required],
      month: ['', Validators.required],
      twd: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      basic: ['', Validators.required],
      hra: ['', Validators.required],
      ca: ['', Validators.required],
      pay: ['', Validators.required],
      deduction: ['', Validators.required]
    });
  }

  addSalary() {
    if (this.addSalaryForm.valid) {
      this.service.addSalaryFromRemote(this.addSalaryForm.value).subscribe(
        data => {
          console.log("Salary Added Successfully ");
          this.msg = "Employee Salary Added Successfully"
        },
        error => {
          console.log("exception occured");
          this.msg = "Something Went Wrong"
        }
      )
    }
  }

}
