/* =====================
   SERVICE IMPLEMENTATION
===================== */
export class OrderItemServices {
    orderItemRepo;
    constructor(orderItemRepo) {
        this.orderItemRepo = orderItemRepo;
    }
    // ROUTE 1 - LIST
    async list(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = {
            deletedAt: null,
        };
        if (search?.orderId)
            whereClause.orderId = search.orderId;
        if (search?.productId)
            whereClause.productId = search.productId;
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder || "desc" }
            : { createdAt: "desc" };
        const items = await this.orderItemRepo.list(skip, limit, whereClause, sortCriteria);
        const total = await this.orderItemRepo.countAll(whereClause);
        return {
            items,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    // ROUTE 2 - GET BY ID
    async getById(id) {
        const numId = parseInt(id);
        const item = await this.orderItemRepo.findById(numId);
        if (!item || item.deletedAt !== null) {
            throw new Error("Order item tidak ditemukan");
        }
        return item;
    }
    // ROUTE 3 - CREATE
    async create(data) {
        return await this.orderItemRepo.create(data);
    }
    // ROUTE 4 - UPDATE
    async update(id, data) {
        const numId = parseInt(id);
        return await this.orderItemRepo.update(numId, data);
    }
    // ROUTE 5 - DELETE
    async delete(id) {
        const numId = parseInt(id);
        const item = await this.orderItemRepo.findById(numId);
        if (!item || item.deletedAt !== null) {
            throw new Error("Order item tidak ditemukan atau sudah dihapus");
        }
        return await this.orderItemRepo.softDelete(numId);
    }
}
//# sourceMappingURL=orderItem.services.js.map