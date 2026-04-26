import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../../shared/service/salary.service';
import { Salary } from '../../salary';

@Component({
  selector: 'app-editsalary',
  templateUrl: './editsalary.component.html',
  styleUrls: ['./editsalary.component.css']
})
export class EditsalaryComponent implements OnInit {

  msg="";
  sid:number;
  editSalaryForm: FormGroup;

  constructor(
    private service: SalaryService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void 
  {
    this.sid = this.router.snapshot.params['sid'];
  
    this.editSalaryForm = this.fb.group({
      sid: [''],
      eid: [{value: '', disabled: true}, Validators.required],
      month: ['', Validators.required],
      twd: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      basic: ['', Validators.required],
      hra: ['', Validators.required],
      ca: ['', Validators.required],
      pay: ['', Validators.required],
      deduction: ['', Validators.required]
    });

    this.service.getCurrentSalaryFromRemote(this.sid).subscribe(data => 
      {
       this.editSalaryForm.patchValue(data);
       console.log("Salary is fetch based on sid "+this.sid)
       }, 
    error => console.log(error));
  }

  public editSalary():void
  {
    if (this.editSalaryForm.valid) {
      const updatedSalary = this.editSalaryForm.getRawValue();
      this.service.editSalaryFromRemote(updatedSalary).subscribe(
        data => {
          console.log("Salary Updated Successfully ");
          this.msg="Salary Updated Successfully"
        },
        error => {
          console.log("exception occured");
          this.msg="Something Went Wrong"
        }
      )
    }
  }

}
