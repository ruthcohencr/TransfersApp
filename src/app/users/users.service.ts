import { USERS } from './mock-users';
import { User } from './user';

export class UserService{
    usersArray: User[];
    
    constructor(){
        this.usersArray = USERS;
    }

    getUsers() : User[] {
        return this.usersArray;
    }

    addUser(user : User){
        this.usersArray.push(user);
    }
}