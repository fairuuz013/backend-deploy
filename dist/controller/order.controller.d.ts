import type { Request, Response } from "express";
import type { IOrderService } from "../services/order.services.js";
export interface IOrderController {
    list(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
    checkout(req: Request, res: Response): Promise<void>;
    findComplex(req: Request, res: Response): Promise<void>;
}
export declare class OrderController implements IOrderController {
    private orderService;
    constructor(orderService: IOrderService);
    list(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
    checkout(req: Request, res: Response): Promise<void>;
    findComplex(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=order.controller.d.ts.map
