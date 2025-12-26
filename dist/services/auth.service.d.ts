import type { IAuthRepository } from "../repository/auth.repository.js";
export interface IAuthService {
    register(data: {
        username: string;
        email: string;
        password: string;
        role?: string;
    }): Promise<any>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
export declare class AuthServices implements IAuthService {
    private authRepo;
    constructor(authRepo: IAuthRepository);
    register(data: {
        username: string;
        email: string;
        password: string;
        role?: string;
    }): Promise<{
        username: any;
        email: any;
        role: any;
    }>;
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            email: any;
            username: any;
            role: any;
        };
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
