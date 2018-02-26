export class User{
    name: string;
    familyName:string;
    email:string;
    id:number;
    password:string;
    bankName:Banks;
    accountNumber: number;
}

export enum Banks {
    Leumi = "לאומי",
    Hapoalim = "הפועלים",
    Discount = "דיסקונט",
    Union = "איגוד"
}