import { Injectable } from '@nestjs/common';

export type User = {
    id:number,
    email: string,
    password: string,
    name:string
}

@Injectable()
export class UsersService {

    private readonly users :User[] = [
        { id : 1 , name: 'Jaivik Patel' , email: 'jaivik@gmail.com' , password: 'Jaivik@123'},
        { id : 2 , name: 'Het Patel' , email: 'het@gmail.com' , password: 'Het@123'},
        { id : 3 , name: 'Devansh Patel' , email: 'devansh@gmail.com' , password: 'Devansh@123'}

    ]

    async findOne(email: string) {
        return this.users.find(user => user.email === email)
    }   

}
