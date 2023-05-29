import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ExecException } from "child_process";

@Injectable()
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context:  ExecutionContext){
        const req = context.switchToHttp().getRequest()
        return req.isAuthenticated()
    }
}