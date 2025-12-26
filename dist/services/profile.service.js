export class ProfileServices {
    profileRepo;
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    // GET PROFILE BY USER LOGIN
    async getMyProfile(userId) {
        const profile = await this.profileRepo.findByUserId(userId);
        if (!profile) {
            throw new Error("Profile belum dibuat");
        }
        return profile;
    }
    // CREATE PROFILE (1 USER 1 PROFILE)
    async create(userId, data) {
        const exists = await this.profileRepo.findByUserId(userId);
        if (exists) {
            throw new Error("Profile sudah ada");
        }
        return this.profileRepo.create({
            ...data,
            user: { connect: { id: userId } },
        });
    }
    // UPDATE PROFILE
    async update(userId, data) {
        const profile = await this.profileRepo.findByUserId(userId);
        if (!profile) {
            throw new Error("Profile tidak ditemukan");
        }
        return this.profileRepo.update(profile.id, data);
    }
}
//# sourceMappingURL=profile.service.js.map