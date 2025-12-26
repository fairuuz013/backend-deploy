export class OrderItemRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(skip, take, where, orderBy) {
        return this.prisma.orderItems.findMany({
            skip,
            take,
            where,
            orderBy,
            include: {
                product: true,
                order: true,
            },
        });
    }
    async countAll(where) {
        return this.prisma.orderItems.count({ where });
    }
    async findById(id) {
        return this.prisma.orderItems.findUnique({
            where: { id, deletedAt: null },
            include: {
                product: true,
                order: true,
            },
        });
    }
    async create(data) {
        return this.prisma.orderItems.create({ data });
    }
    async update(id, data) {
        return this.prisma.orderItems.update({
            where: { id, deletedAt: null },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.orderItems.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
//# sourceMappingURL=orderItem.repository.js.map