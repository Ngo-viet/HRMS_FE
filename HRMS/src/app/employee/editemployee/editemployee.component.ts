import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  id:number;
  editEmployeeForm: FormGroup;
  msg="";

  constructor(
    private service: EmployeeService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    
    this.editEmployeeForm = this.fb.group({
      id: [{value: '', disabled: true}, Validators.required],
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

    this.service.getCurrentEmployeeFromRemote(this.id).subscribe(data => {
      this.editEmployeeForm.patchValue(data);
      console.log("employee is fetch based on id "+this.id)
    }, 
    error => console.log(error));
  }

  editEmployee() {
    if (this.editEmployeeForm.valid) {
      const updatedEmployee = this.editEmployeeForm.getRawValue();
      this.service.editEmployeeFromRemote(updatedEmployee).subscribe(
        data => {
          console.log("Employee Updated Successfully ");
          this.msg="Employee Updated Successfully"
        },
        error => {
          console.log("exception occured");
          this.msg="Something Went Wrong"
        }
      )
    }
  }

}
