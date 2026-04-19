export class Employee
{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    department:string;
    gender:string;
    fullAddress:string;
    city:string;
    state:string;
    country:string;
    createdDate: string;
    createdBy: string;
    updatedDate: string | null;
    updatedBy: string | null;
    isDeleted: boolean;
    constructor () { }
}