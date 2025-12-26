/* =====================
   SERVICE IMPLEMENTATION
===================== */
export class OrderServices {
    orderRepo;
    productRepo;
    constructor(orderRepo, productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }
    ;
    // ROUTE 1 - LIST
    async list(params) {
        const { page, limit, search, sortBy, sortOrder } = params;
        const skip = (page - 1) * limit;
        const whereClause = {
            deletedAt: null,
        };
        if (search?.userId)
            whereClause.userId = search.userId;
        const sortCriteria = sortBy
            ? { [sortBy]: sortOrder || "desc" }
            : { createdAt: "desc" };
        const orders = await this.orderRepo.list(skip, limit, whereClause, sortCriteria);
        const total = await this.orderRepo.countAll(whereClause);
        return {
            orders,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
    // ROUTE 2 - GET BY ID
    async getById(id) {
        const numId = parseInt(id);
        const order = await this.orderRepo.findById(numId);
        if (!order || order.deletedAt !== null) {
            throw new Error("Orders tidak ditemukan");
        }
        return order;
    }
    // ROUTE 4 - CREATE
    async createOrders(data) {
        return await this.orderRepo.create({
            user: {
                connect: { id: data.userId }
            },
            total: 0,
            status: "PENDING",
        });
    }
    // ROUTE 5 - UPDATE
    async update(id, data) {
        const numId = parseInt(id);
        return await this.orderRepo.update(numId, data);
    }
    // ROUTE 6 - DELETE (SOFT)
    async delete(id) {
        const numId = parseInt(id);
        const order = await this.orderRepo.findById(numId);
        if (!order || order.deletedAt !== null) {
            throw new Error("Orders tidak ditemukan atau sudah dihapus");
        }
        return await this.orderRepo.softDelete(numId);
    }
    // ROUTE 7 CHECKOUT 
    async checkout(orderId) {
        const id = parseInt(orderId);
        const order = await this.orderRepo.findById(id);
        if (!order || order.deletedAt !== null) {
            throw new Error("Order tidak ditemukan");
        }
        if (order.status !== "PENDING") {
            throw new Error("Order sudah di checkout");
        }
        // VALIDASI STOCK
        for (const item of order.orderItems) {
            if (item.product.stock < item.quantity) {
                throw new Error(`Stock produk ${item.product.name} tidak cukup`);
            }
        }
        // KURANGI STOCK
        for (const item of order.orderItems) {
            await this.productRepo.update(item.productId, {
                stock: item.product.stock - item.quantity,
            });
        }
        // UPDATE STATUS
        return await this.orderRepo.update(id, {
            status: "PAID",
        });
    }
    async execStats() {
        const overview = await this.orderRepo.getStats();
        const byUser = await this.orderRepo.getOrdersByUserStats();
        return {
            overview,
            byUser
        };
    }
    async findComplex(userId, minTotal) {
        const uid = parseInt(userId);
        if (isNaN(uid)) {
            throw new Error("User tidak valid");
        }
        return await this.orderRepo.findComplex(uid, minTotal);
    }
}
//# sourceMappingURL=order.services.js.map