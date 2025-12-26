export class CategoryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(skip, take, where, orderBy) {
        return this.prisma.category.findMany({
            skip,
            take,
            where,
            orderBy,
        });
    }
    async countAll(where) {
        return this.prisma.category.count({ where });
    }
    async findById(id) {
        return this.prisma.category.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async create(data) {
        return this.prisma.category.create({ data });
    }
    async update(id, data) {
        return this.prisma.category.update({
            where: { id, deletedAt: null },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.category.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    async findComplex(name, maxProductPrice) {
        return await this.prisma.category.findMany({
            where: {
                deletedAt: null,
                OR: [
                    // CATEGORY BERDASARKAN NAMA
                    {
                        name: {
                            contains: name,
                            mode: "insensitive",
                        },
                    },
                    // Category yang punya product murah 
                    {
                        products: {
                            some: {
                                price: {
                                    lt: maxProductPrice,
                                },
                            },
                        },
                    },
                ],
            },
            include: {
                products: true,
            },
        });
    }
}
//# sourceMappingURL=category.repository.js.map