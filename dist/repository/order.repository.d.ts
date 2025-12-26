import type { Prisma, PrismaClient, Orders } from "../generated";
export interface IOrderRepository {
    list(skip: number, take: number, where: Prisma.OrdersWhereInput, orderBy: Prisma.OrdersOrderByWithRelationInput): Promise<Orders[]>;
    countAll(where: Prisma.OrdersWhereInput): Promise<number>;
    findById(id: number): Promise<Orders | null>;
    create(data: Prisma.OrdersCreateInput): Promise<Orders>;
    update(id: number, data: Prisma.OrdersUpdateInput): Promise<Orders>;
    softDelete(id: number): Promise<Orders>;
    findComplex(userId: number, minTotal: number): Promise<Orders[]>;
    getStats(): Promise<any>;
    getOrdersByUserStats(): Promise<any>;
}
export declare class OrderRepository implements IOrderRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    list(skip: number, take: number, where: Prisma.OrdersWhereInput, orderBy: Prisma.OrdersOrderByWithRelationInput): Promise<Orders[]>;
    countAll(where: Prisma.OrdersWhereInput): Promise<number>;
    findById(id: number): Promise<({
        orderItems: ({
            product: {
                name: string;
                id: number;
                description: string | null;
                price: Prisma.Decimal;
                stock: number;
                image: string;
                categoryId: number | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            orderId: number;
            productId: number;
            quantity: number;
            priceAtTime: Prisma.Decimal | null;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        total: Prisma.Decimal;
        userId: number;
        status: string;
    }) | null>;
    create(data: Prisma.OrdersCreateInput): Promise<Orders>;
    update(id: number, data: Prisma.OrdersUpdateInput): Promise<Orders>;
    softDelete(id: number): Promise<Orders>;
    findComplex(userId: number, minTotal: number): Promise<Orders[]>;
    getStats(): Promise<Prisma.GetOrdersAggregateType<{
        _count: {
            id: true;
        };
        _min: {
            createdAt: true;
        };
        _max: {
            createdAt: true;
        };
    }>>;
    getOrdersByUserStats(): Promise<(Prisma.PickEnumerable<Prisma.OrdersGroupByOutputType, "userId"[]> & {
        _count: {
            id: number;
        };
    })[]>;
}
//# sourceMappingURL=order.repository.d.ts.map