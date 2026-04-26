import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/service/employee.service';
import { Employee } from '../../employee/employee.model';

@Component({
  selector: 'app-employeereport',
  templateUrl: './employeereport.component.html',
  styleUrls: ['./employeereport.component.css']
})
export class EmployeereportComponent implements OnInit {

  employee: any;
  filteredEmployees: any;
  searchCriteria = {
    firstName: '',
    lastName: '',
    department: '',
    email: ''
  };

  showAddModal = false;
  showEditModal = false;
  addMsg = '';
  editMsg = '';
  addNotAvailable = false;
  editNotAvailable = false;

  addEmployeeForm: FormGroup;
  editEmployeeForm: FormGroup;

  id = this.router1.snapshot.params['id'];

  constructor(
    private service: EmployeeService, 
    private router: Router,
    private router1: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.loadEmployees();
      
    if(this.id != undefined) {
      console.log("id from button "+ this.id);
      this.deleteEmployee(this.id);
    }
  }

  initForms() {
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

    this.editEmployeeForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      mobile: ['', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      createdBy: [''],
      createdDate: ['']
    });
  }

  deleteEmployee(id: number): void {
    this.service.deleteEmployeeFromRemote(id).subscribe(data => 
      {
      console.log("Employee Deleted Successfully ")
       this.loadEmployees();
      },
      error => 
      {
        console.log("exception occured");
      }
    )
  }

  searchEmployees(): void {
    this.filteredEmployees = this.employee.filter((emp: any) => {
      return (
        (this.searchCriteria.firstName === '' || emp.firstName.toLowerCase().includes(this.searchCriteria.firstName.toLowerCase())) &&
        (this.searchCriteria.lastName === '' || emp.lastName.toLowerCase().includes(this.searchCriteria.lastName.toLowerCase())) &&
        (this.searchCriteria.department === '' || emp.department.toLowerCase().includes(this.searchCriteria.department.toLowerCase())) &&
        (this.searchCriteria.email === '' || emp.email.toLowerCase().includes(this.searchCriteria.email.toLowerCase()))
      );
    });
  }

  openAddModal(): void {
    this.addEmployeeForm.reset();
    this.showAddModal = true;
    this.addMsg = '';
    this.addNotAvailable = false;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  openEditModal(emp: any): void {
    this.showEditModal = true;
    this.editEmployeeForm.patchValue(emp);
    this.editMsg = '';
    this.editNotAvailable = false;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  addEmployee(): void {
    if (this.addEmployeeForm.valid) {
      this.service.addEmployeeFromRemote(this.addEmployeeForm.value).subscribe(
        data => {
          console.log("Employee Added Successfully ");
          this.addNotAvailable = true;
          this.addMsg = "Employee Added Successfully";
          this.closeAddModal();
          this.loadEmployees(); // Refresh list
        },
        error => {
          console.log("exception occured");
          this.addMsg = "Email Address Already Exists !!!";
          this.addNotAvailable = false;
        }
      );
    }
  }

  editEmployeeSubmit(): void {
    if (this.editEmployeeForm.valid) {
      this.service.editEmployeeFromRemote(this.editEmployeeForm.value).subscribe(
        data => {
          console.log("Employee Updated Successfully ");
          this.editNotAvailable = true;
          this.editMsg = "Employee Updated Successfully";
          this.closeEditModal();
          this.loadEmployees(); // Refresh list
        },
        error => {
          console.log("exception occured");
          this.editMsg = "Something Went Wrong";
          this.editNotAvailable = false;
        }
      );
    }
  }

  loadEmployees(): void {
    this.service.getEmployeeFromRemote().subscribe(data => {
      this.employee = data;
      this.filteredEmployees = data;
    });
  }
}
