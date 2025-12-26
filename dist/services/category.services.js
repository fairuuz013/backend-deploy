/* =====================
   SERVICE IMPLEMENTATION
===================== */
export class CategoryServices {
    categoryRepo;
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    // ROUTE 1 - LIST
    async list(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = {
            deletedAt: null,
        };
        if (search?.name) {
            whereClause.name = { contains: search.name, mode: "insensitive" };
        }
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder || "desc" }
            : { createdAt: "desc" };
        const categories = await this.categoryRepo.list(skip, limit, whereClause, sortCriteria);
        const total = await this.categoryRepo.countAll(whereClause);
        return {
            categories,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    // ROUTE 2 - GET BY ID
    async getById(id) {
        const numId = parseInt(id);
        const category = await this.categoryRepo.findById(numId);
        if (!category || category.deletedAt !== null) {
            throw new Error("Category tidak ditemukan");
        }
        return category;
    }
    // ROUTE 3 - CREATE
    async create(data) {
        return await this.categoryRepo.create(data);
    }
    // ROUTE 4 - UPDATE
    async update(id, data) {
        const numId = parseInt(id);
        return await this.categoryRepo.update(numId, data);
    }
    // ROUTE 5 - DELETE (SOFT)
    async delete(id) {
        const numId = parseInt(id);
        const category = await this.categoryRepo.findById(numId);
        if (!category) {
            throw new Error("Category tidak ditemukan atau sudah dihapus");
        }
        return await this.categoryRepo.softDelete(numId);
    }
    async findComplex(name, maxProductPrice) {
        if (!name && !maxProductPrice) {
            throw new Error("Minimal salah satu parameter harus diisi");
        }
        return await this.categoryRepo.findComplex(name, maxProductPrice);
    }
}
//# sourceMappingURL=category.services.js.map