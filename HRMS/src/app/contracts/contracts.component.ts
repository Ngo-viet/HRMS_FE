import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../shared/service/contract.service';
import { Contract } from './contract.model';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: Contract[] = [];
  showAddModal = false;
  showEditModal = false;
  addMsg = '';
  editMsg = '';
  addSuccess = false;
  editSuccess = false;

  addContractForm: FormGroup;
  editContractForm: FormGroup;

  constructor(private service: ContractService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadContracts();
    this.initForms();
  }

  initForms() {
    this.addContractForm = this.fb.group({
      employeeId: ['', Validators.required],
      contractType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      contractSalary: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['']
    });

    this.editContractForm = this.fb.group({
      id: [''],
      employeeId: ['', Validators.required],
      contractType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      contractSalary: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['']
    });
  }

  loadContracts(): void {
    this.service.getContracts().subscribe(
      data => this.contracts = data,
      error => console.error('Failed to load contracts', error)
    );
  }

  openAddModal(): void {
    this.addContractForm.reset();
    this.addMsg = '';
    this.addSuccess = false;
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addContract(): void {
    if (this.addContractForm.valid) {
      this.service.addContract(this.addContractForm.value).subscribe(
        () => {
          this.addSuccess = true;
          this.addMsg = 'Contract created successfully';
          this.closeAddModal();
          this.loadContracts();
        },
        error => {
          console.error('Failed to create contract', error);
          this.addSuccess = false;
          this.addMsg = 'Failed to create contract';
        }
      );
    }
  }

  openEditModal(contract: Contract): void {
    this.editContractForm.patchValue(contract);
    this.editMsg = '';
    this.editSuccess = false;
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  editContractSubmit(): void {
    if (this.editContractForm.valid) {
      const updatedContract = this.editContractForm.value;
      this.service.updateContract(updatedContract.id, updatedContract).subscribe(
        () => {
          this.editSuccess = true;
          this.editMsg = 'Contract updated successfully';
          this.closeEditModal();
          this.loadContracts();
        },
        error => {
          console.error('Failed to update contract', error);
          this.editSuccess = false;
          this.editMsg = 'Failed to update contract';
        }
      );
    }
  }

  deleteContract(id: number): void {
    if (!confirm('Are you sure you want to delete this contract?')) {
      return;
    }
    this.service.deleteContract(id).subscribe(
      () => this.loadContracts(),
      error => console.error('Delete contract failed', error)
    );
  }
}
