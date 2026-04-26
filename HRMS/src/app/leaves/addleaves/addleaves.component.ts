import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeavesService } from '../../shared/service/leaves.service';

@Component({
  selector: 'app-addleaves',
  templateUrl: './addleaves.component.html',
  styleUrls: ['./addleaves.component.css']
})
export class AddleavesComponent implements OnInit {

  addLeavesForm: FormGroup;
  not_available = false;
  msg = "";

  constructor(
    private service: LeavesService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addLeavesForm = this.fb.group({
      eid: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      leaveResone: ['', Validators.required],
      description: ['']
    });
  }

  addLeaves() {
    if (this.addLeavesForm.valid) {
      this.service.addLeavesFromRemote(this.addLeavesForm.value).subscribe(
        data => {
          console.log("Leaves Added Successfully ");
          this.not_available = true;
          this.msg = "Employee Leaves Added Successfully"
        },
        error => {
          console.log("exception occured");
          this.msg = "Employee is not present with given Id"
        }
      )
    }
  }
}
