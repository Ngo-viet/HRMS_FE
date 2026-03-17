import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrmsService } from '../hrms.service';
import { Salary } from '../salary';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {

  salary = new Salary();
  msg = "";

  constructor(private service: HrmsService, private router: Router) { }

  ngOnInit(): void {
  }

  addSalary() {
    this.service.addSalaryFromRemote(this.salary).subscribe(
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
