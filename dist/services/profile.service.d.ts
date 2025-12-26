import type { Prisma, Profile } from "../generated";
import type { IProfileRepository } from "../repository/profile.repository.js";
export interface IProfileService {
    getMyProfile(userId: number): Promise<Profile>;
    create(userId: number, data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(userId: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
}
export declare class ProfileServices implements IProfileService {
    private profileRepo;
    constructor(profileRepo: IProfileRepository);
    getMyProfile(userId: number): Promise<Profile>;
    create(userId: number, data: Prisma.ProfileCreateInput): Promise<Profile>;
    update(userId: number, data: Prisma.ProfileUpdateInput): Promise<Profile>;
}
//# sourceMappingURL=profile.service.d.ts.map
