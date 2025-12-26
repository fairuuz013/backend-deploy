import type { Prisma, Orders } from "../generated";
import type { IOrderRepository } from "../repository/order.repository.js";
import type { IProductRepository } from "../repository/product.repository.js";
interface FindAllParams {
    page: number;
    limit: number;
    search?: {
        userId?: number;
        status?: string;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface OrderListResponse {
    orders: Orders[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IOrderService {
    list(params: FindAllParams): Promise<OrderListResponse>;
    getById(id: string): Promise<Orders | null>;
    createOrders(data: {
        userId: number;
    }): Promise<Orders>;
    update(id: string, data: Prisma.OrdersUpdateInput): Promise<Orders>;
    delete(id: string): Promise<Orders>;
    checkout(orderId: string): Promise<Orders>;
    execStats(): Promise<{
        overview: any;
        byUser: any;
    }>;
    findComplex(userId: string, minTotal: number): Promise<Orders[]>;
}
export declare class OrderServices implements IOrderService {
    private orderRepo;
    private productRepo;
    constructor(orderRepo: IOrderRepository, productRepo: IProductRepository);
    list(params: FindAllParams): Promise<OrderListResponse>;
    getById(id: string): Promise<Orders | null>;
    createOrders(data: {
        userId: number;
    }): Promise<Orders>;
    update(id: string, data: Prisma.OrdersUpdateInput): Promise<Orders>;
    delete(id: string): Promise<Orders>;
    checkout(orderId: string): Promise<Orders>;
    execStats(): Promise<{
        overview: any;
        byUser: any;
    }>;
    findComplex(userId: string, minTotal: number): Promise<Orders[]>;
}
export {};
//# sourceMappingURL=order.services.d.ts.map
