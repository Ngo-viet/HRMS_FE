import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../shared/service/employee.service';
import { Employee } from '../../employee/employee.model';

@Component({
  selector: 'app-employeereport',
  templateUrl: './employeereport.component.html',
  styleUrls: ['./employeereport.component.css']
})
export class EmployeereportComponent implements OnInit {

  //declaring employee class here
  employee: any;
  filteredEmployees: any;
  searchCriteria = {
    firstName: '',
    lastName: '',
    department: '',
    email: ''
  };

  // Modal states
  showAddModal = false;
  showEditModal = false;
  newEmployee = new Employee();
  editEmployee = new Employee();
  addMsg = '';
  editMsg = '';
  addNotAvailable = false;
  editNotAvailable = false;

  // in order to access myservice  i need to do dependancy injection
  constructor(private service: EmployeeService, private router:Router,private router1:ActivatedRoute) { }


  id = this.router1.snapshot.params['id'];


  //i want to access all employee and display at beggining
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

  // Modal methods
  openAddModal(): void {
    this.showAddModal = true;
    this.newEmployee = new Employee();
    this.addMsg = '';
    this.addNotAvailable = false;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  openEditModal(emp: any): void {
    this.showEditModal = true;
    this.editEmployee = { ...emp };
    this.editMsg = '';
    this.editNotAvailable = false;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  addEmployee(): void {
    this.service.addEmployeeFromRemote(this.newEmployee).subscribe(
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

  editEmployeeSubmit(): void {
    this.service.editEmployeeFromRemote(this.editEmployee).subscribe(
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

  loadEmployees(): void {
    this.service.getEmployeeFromRemote().subscribe(data => {
      this.employee = data;
      this.filteredEmployees = data;
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
      
    if(this.id != undefined) {
      console.log("id from button "+ this.id);
      this.deleteEmployee(this.id);
    }
  }

  }


