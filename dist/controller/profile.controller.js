import { successResponse } from "../utils/response.js";
export class ProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    // GET MY PROFILE
    async me(req, res) {
        const userId = req.user.id;
        const profile = await this.profileService.getMyProfile(userId);
        successResponse(res, "Profile ditemukan", profile);
    }
    // CREATE PROFILE
    async create(req, res) {
        const userId = req.user.id;
        const profile = await this.profileService.create(userId, req.body);
        successResponse(res, "Profile berhasil dibuat", profile, null, 201);
    }
    // UPDATE PROFILE
    async update(req, res) {
        const userId = req.user.id;
        const profile = await this.profileService.update(userId, req.body);
        successResponse(res, "Profile berhasil diupdate", profile);
    }
}
//# sourceMappingURL=profile.controller.js.map
