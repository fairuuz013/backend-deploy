import type { Prisma, PrismaClient, OrderItems } from "../generated";
export interface IOrderItemRepository {
    list(skip: number, take: number, where: Prisma.OrderItemsWhereInput, orderBy: Prisma.OrderItemsOrderByWithRelationInput): Promise<OrderItems[]>;
    countAll(where: Prisma.OrderItemsWhereInput): Promise<number>;
    findById(id: number): Promise<OrderItems | null>;
    create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;
    update(id: number, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;
    softDelete(id: number): Promise<OrderItems>;
}
export declare class OrderItemRepository implements IOrderItemRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    list(skip: number, take: number, where: Prisma.OrderItemsWhereInput, orderBy: Prisma.OrderItemsOrderByWithRelationInput): Promise<OrderItems[]>;
    countAll(where: Prisma.OrderItemsWhereInput): Promise<number>;
    findById(id: number): Promise<OrderItems | null>;
    create(data: Prisma.OrderItemsCreateInput): Promise<OrderItems>;
    update(id: number, data: Prisma.OrderItemsUpdateInput): Promise<OrderItems>;
    softDelete(id: number): Promise<OrderItems>;
}
//# sourceMappingURL=orderItem.repository.d.ts.map