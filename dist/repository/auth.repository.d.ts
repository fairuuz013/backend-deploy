import { PrismaClient } from "../generated";
export interface IAuthRepository {
    findByEmail(email: string): Promise<any | null>;
    createUser(data: {
        username: string;
        email: string;
        password_hash: string;
        role: string;
    }): Promise<any>;
}
export declare class AuthRepository implements IAuthRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByEmail(email: string): import("../generated").Prisma.Prisma__UserClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        username: string;
        email: string;
        password_hash: string;
        role: string;
    } | null, null, import("../generated/runtime/client").DefaultArgs, import("../generated").Prisma.PrismaClientOptions>;
    createUser(data: {
        username: string;
        email: string;
        password_hash: string;
        role: string;
    }): import("../generated").Prisma.Prisma__UserClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        username: string;
        email: string;
        password_hash: string;
        role: string;
    }, never, import("../generated/runtime/client").DefaultArgs, import("../generated").Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=auth.repository.d.ts.map