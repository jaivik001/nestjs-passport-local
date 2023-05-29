import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
