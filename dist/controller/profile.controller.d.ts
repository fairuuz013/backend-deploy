import type { Request, Response } from "express";
import type { IProfileService } from "../services/profile.service.js";
export declare class ProfileController {
    private profileService;
    constructor(profileService: IProfileService);
    me(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=profile.controller.d.ts.map
