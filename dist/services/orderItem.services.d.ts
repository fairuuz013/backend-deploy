import type { Prisma, OrderItems } from "../generated";
import type { IOrderItemRepository } from "../repository/orderItem.repository.js";
interface FindAllParams {
    page: number;
    limit: number;
    search?: {
        orderId?: number;
        productId?: number;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface OrderItemListResponse {
    items: OrderItems[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface IOrderItemService {
    list(params: FindAllParams): Promise<OrderItemListResponse>;
    getById(id: string): Promise<OrderItems>;
    create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;
    update(id: string, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;
    delete(id: string): Promise<OrderItems>;
}
export declare class OrderItemServices implements IOrderItemService {
    private orderItemRepo;
    constructor(orderItemRepo: IOrderItemRepository);
    list(params: FindAllParams): Promise<OrderItemListResponse>;
    getById(id: string): Promise<OrderItems>;
    create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;
    update(id: string, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;
    delete(id: string): Promise<OrderItems>;
}
export {};
//# sourceMappingURL=orderItem.services.d.ts.map
