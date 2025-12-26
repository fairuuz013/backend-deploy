import { successResponse, errorResponse } from "../utils/response.js";
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register = async (req, res) => {
        try {
            const result = await this.authService.register(req.body);
            successResponse(res, "Register berhasil", result, null, 201);
        }
        catch (err) {
            errorResponse(res, err.message);
        }
    };
    login = async (req, res) => {
        try {
            const result = await this.authService.login(req.body);
            successResponse(res, "Login berhasil", result);
        }
        catch (err) {
            errorResponse(res, err.message);
        }
    };
}
//# sourceMappingURL=auth.controller.js.map
