import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../shared/service/salary.service';
import { Salary } from '../salary';

@Component({
  selector: 'app-salaryreport',
  templateUrl: './salaryreport.component.html',
  styleUrls: ['./salaryreport.component.css']
})
export class SalaryreportComponent implements OnInit {
  salaries: Salary[] = [];
  showAddModal = false;
  showEditModal = false;
  addMsg = '';
  editMsg = '';
  addSuccess = false;
  editSuccess = false;
  newSalary: Salary = new Salary();
  editSalary: Salary = new Salary();

  constructor(private service: SalaryService) {}

  ngOnInit(): void {
    this.loadSalaries();
  }

  loadSalaries(): void {
    this.service.getSalaryFromRemote().subscribe(
      data => this.salaries = data as Salary[],
      error => console.error('Failed to load salaries', error)
    );
  }

  openAddModal(): void {
    this.newSalary = new Salary();
    this.addMsg = '';
    this.addSuccess = false;
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addSalary(): void {
    this.service.addSalaryFromRemote(this.newSalary).subscribe(
      () => {
        this.addSuccess = true;
        this.addMsg = 'Salary added successfully';
        this.closeAddModal();
        this.loadSalaries();
      },
      error => {
        console.error('Failed to add salary', error);
        this.addSuccess = false;
        this.addMsg = 'Failed to add salary';
      }
    );
  }

  openEditModal(salary: Salary): void {
    this.editSalary = { ...salary } as Salary;
    this.editMsg = '';
    this.editSuccess = false;
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  editSalarySubmit(): void {
    this.service.editSalaryFromRemote(this.editSalary).subscribe(
      () => {
        this.editSuccess = true;
        this.editMsg = 'Salary updated successfully';
        this.closeEditModal();
        this.loadSalaries();
      },
      error => {
        console.error('Failed to update salary', error);
        this.editSuccess = false;
        this.editMsg = 'Failed to update salary';
      }
    );
  }

  deleteSalary(sid: number): void {
    if (!confirm('Are you sure you want to delete this salary record?')) {
      return;
    }
    this.service.deleteSalaryFromRemote(sid).subscribe(
      () => this.loadSalaries(),
      error => console.error('Delete salary failed', error)
    );
  }
}
