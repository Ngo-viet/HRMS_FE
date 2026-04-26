export class Contract {
  id: number;
  employeeId: number;
  startDate: string;
  endDate: string;
  contractType: string;
  contractSalary: number;
  status: string;
  notes: string;

  constructor() {
    this.id = 0;
    this.employeeId = 0;
    this.startDate = '';
    this.endDate = '';
    this.contractType = '';
    this.contractSalary = 0;
    this.status = '';
    this.notes = '';
  }
}
