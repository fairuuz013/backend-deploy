;
export class ProductServices {
    productRepo;
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    // ROUTE PRODUCT 
    // ROUTE 1
    async list(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = { deletedAt: null };
        if (search?.name)
            whereClause.name = { contains: search.name, mode: 'insensitive' };
        if (search?.min_price)
            whereClause.price = { gte: search.min_price };
        if (search?.max_price)
            whereClause.price = { lte: search.max_price };
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder || 'desc' }
            : { createdAt: 'desc' };
        const products = await this.productRepo.list(skip, limit, whereClause, sortCriteria);
        const total = await this.productRepo.countAll(whereClause);
        return {
            products,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    // ROUTE 2
    async getById(id) {
        const numId = parseInt(id);
        const product = await this.productRepo.findById(numId);
        // manual filter soft delete
        if (!product || product.deletedAt !== null) {
            throw new Error("Product tidak di temukan");
        }
        return product;
    }
    // ROUTE 4
    async create(data) {
        return await this.productRepo.create(data);
    }
    // ROUTE 5
    async update(id, data) {
        const numId = parseInt(id);
        return await this.productRepo.update(numId, data);
    }
    ;
    // ROUTE 6
    async delete(id) {
        const numId = parseInt(id);
        const product = await this.productRepo.findById(numId);
        if (!product || product.deletedAt !== null) {
            throw new Error("Product tidak ditemukan atau sudah dihapus");
        }
        // Baru update
        return await this.productRepo.softDelete(numId);
    }
    ;
    async exec() {
        const stats = await this.productRepo.getStats();
        const categoryStats = await this.productRepo.getProductsByCategoryStats();
        return {
            overview: stats,
            byCategory: categoryStats
        };
    }
}
//# sourceMappingURL=product.services.js.map