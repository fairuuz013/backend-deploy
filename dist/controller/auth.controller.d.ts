import type { Request, Response } from "express";
import type { IAuthService } from "../services/auth.service.js";
export declare class AuthController {
    private authService;
    constructor(authService: IAuthService);
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map
