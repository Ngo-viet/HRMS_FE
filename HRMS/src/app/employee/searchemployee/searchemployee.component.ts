import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  searchForm: FormGroup;
  msg: string = '';
  data$:any;
  available:boolean= false;

  constructor(private service:EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  serachemployee() {
    if (this.searchForm.valid) {
      this.msg = '';
      this.service.searchEmpFromRemote(this.searchForm.value).subscribe(
        (response: any) => {
          this.data$ = response;
          if(this.data$ == null) {
            console.log("employee object is null")
            this.msg = "Employee is not found";
            this.available = false;
          } else {
            this.available = true;
            console.log("Return employee object: "+this.data$.firstName);
            console.log("Return employee object: "+this.data$.email);
          }
        },
        (errors: any) => {
          console.log("errors");
        }
      )
    }
  }
}
