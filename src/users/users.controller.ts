import { Controller, Get, Post, Request ,Response, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req , @Response() res) {
        // console.log(req);
        // res.cookie("key" , req.user)
        // console.log("res->" , res);

        res.send({ errMsg : false , message: "User has been login successfully." , data : req.user});
    }

    @UseGuards(AuthenticatedGuard)
    @Get('')
    async findALL(@Request() req) {
        console.log(req.user);
        return this.usersService.findOne(req.user.email)
    }
    
}
