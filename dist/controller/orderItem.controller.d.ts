import type { Request, Response } from "express";
import type { IOrderItemService } from "../services/orderItem.services.js";
export declare class OrderItemController {
    private orderItemService;
    constructor(orderItemService: IOrderItemService);
    list(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=orderItem.controller.d.ts.map
