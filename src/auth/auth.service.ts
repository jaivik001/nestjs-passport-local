import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async validateUser(email:string , password:string){
        const user = await this.userService.findOne(email);
        if(user && user?.password === password){
            const {password , ...rest} = user;
            return rest;
        }
        return null;

    }
}
