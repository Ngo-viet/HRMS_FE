import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeavesService } from '../../shared/service/leaves.service';
import { Leaves } from '../../leaves';

@Component({
  selector: 'app-leavesreport',
  templateUrl: './leavesreport.component.html',
  styleUrls: ['./leavesreport.component.css']
})
export class LeavesreportComponent implements OnInit {
  leaves: Leaves[] = [];
  showAddModal = false;
  showEditModal = false;
  addMsg = '';
  editMsg = '';
  addSuccess = false;
  editSuccess = false;
  
  addLeaveForm: FormGroup;
  editLeaveForm: FormGroup;

  constructor(private service: LeavesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadLeaves();
    this.initForms();
  }

  initForms() {
    this.addLeaveForm = this.fb.group({
      eid: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      leaveResone: ['', Validators.required],
      description: ['']
    });

    this.editLeaveForm = this.fb.group({
      lid: [''],
      eid: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      leaveResone: ['', Validators.required],
      description: ['']
    });
  }

  loadLeaves(): void {
    this.service.getLeavesFromRemote().subscribe(
      data => this.leaves = data as Leaves[],
      error => console.error('Failed to load leaves', error)
    );
  }

  openAddModal(): void {
    this.addLeaveForm.reset();
    this.addMsg = '';
    this.addSuccess = false;
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addLeave(): void {
    if (this.addLeaveForm.valid) {
      this.service.addLeavesFromRemote(this.addLeaveForm.value).subscribe(
        () => {
          this.addSuccess = true;
          this.addMsg = 'Leave added successfully';
          this.closeAddModal();
          this.loadLeaves();
        },
        error => {
          console.error('Add leave failed', error);
          this.addSuccess = false;
          this.addMsg = 'Failed to add leave';
        }
      );
    }
  }

  openEditModal(leave: Leaves): void {
    this.editLeaveForm.patchValue(leave);
    this.editMsg = '';
    this.editSuccess = false;
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  editLeaveSubmit(): void {
    if (this.editLeaveForm.valid) {
      this.service.editLeavesFromRemote(this.editLeaveForm.value).subscribe(
        () => {
          this.editSuccess = true;
          this.editMsg = 'Leave updated successfully';
          this.closeEditModal();
          this.loadLeaves();
        },
        error => {
          console.error('Edit leave failed', error);
          this.editSuccess = false;
          this.editMsg = 'Failed to update leave';
        }
      );
    }
  }

  deleteLeaves(lid: number): void {
    this.service.deleteLeavesFromRemote(lid).subscribe(
      () => {
        this.loadLeaves();
      },
      error => {
        console.error('Delete leave failed', error);
      }
    );
  }
}
