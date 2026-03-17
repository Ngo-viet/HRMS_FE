import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesreportComponent } from './leavesreport.component';

describe('LeavesreportComponent', () => {
  let component: LeavesreportComponent;
  let fixture: ComponentFixture<LeavesreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
