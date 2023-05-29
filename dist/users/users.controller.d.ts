import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(req: any, res: any): Promise<void>;
    findALL(req: any): Promise<import("./users.service").User>;
}
