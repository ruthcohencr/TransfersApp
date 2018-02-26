import { User, Banks } from './user';

export const USERS : User[] = [
    {name: "רות", familyName:"כהן", email: "ruthcohencc@gmail.com",password: "1234" ,id: 1111, bankName:Banks.Leumi, accountNumber:111111},
    {name: "רון", familyName:"כהן", email: "roncohen@gmail.com",password: "1234" ,id: 2222, bankName:Banks.Union, accountNumber:222222},
    {name: "דגן", familyName:"אוקו", email: "daganoko@gmail.com",password: "1234" ,id: 3333, bankName:Banks.Hapoalim, accountNumber:333333},
    {name: "יצחק", familyName:"אלקיים", email: "izikelkayam@gmail.com",password: "1234" ,id: 4444, bankName:Banks.Discount, accountNumber:444444}
];
