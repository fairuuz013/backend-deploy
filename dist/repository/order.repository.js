export class OrderRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(skip, take, where, orderBy) {
        return await this.prisma.orders.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                user: true,
                orderItems: true,
            },
        });
    }
    async countAll(where) {
        return await this.prisma.orders.count({ where });
    }
    // FINDBYID
    async findById(id) {
        return await this.prisma.orders.findUnique({
            where: {
                id,
                deletedAt: null,
            },
            include: {
                orderItems: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    // CREATE
    async create(data) {
        return await this.prisma.orders.create({ data });
    }
    // UPDATE
    async update(id, data) {
        return await this.prisma.orders.update({
            where: {
                id,
                deletedAt: null,
            },
            data,
        });
    }
    // DELETE (SOFT)
    async softDelete(id) {
        return await this.prisma.orders.update({
            where: {
                id,
                deletedAt: null,
            },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    async findComplex(userId, minTotal) {
        return await this.prisma.orders.findMany({
            where: {
                deletedAt: null,
                userId,
                orderItems: {
                    some: {
                        priceAtTime: {
                            gt: minTotal,
                        },
                    },
                },
            },
            include: {
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }
    async getStats() {
        return await this.prisma.orders.aggregate({
            _count: { id: true },
            _min: { createdAt: true },
            _max: { createdAt: true },
        });
    }
    async getOrdersByUserStats() {
        return await this.prisma.orders.groupBy({
            by: ['userId'],
            _count: { id: true },
        });
    }
}
//# sourceMappingURL=order.repository.js.map