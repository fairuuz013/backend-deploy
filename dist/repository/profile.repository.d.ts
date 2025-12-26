import type { Prisma, PrismaClient, Profile } from "../generated";
export interface IProfileRepository {
    findByUserId(userId: number): Promise<Profile | null>;
    findById(id: number): Promise<Profile | null>;
    create(data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(id: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
}
export declare class ProfileRepository implements IProfileRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByUserId(userId: number): Promise<Profile | null>;
    findById(id: number): Promise<Profile | null>;
    create(data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(id: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
}
//# sourceMappingURL=profile.repository.d.ts.map