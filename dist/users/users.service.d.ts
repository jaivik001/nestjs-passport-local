export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
};
export declare class UsersService {
    private readonly users;
    findOne(email: string): Promise<User>;
}
