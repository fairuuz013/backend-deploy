import { successResponse } from "../utils/response.js";
export class OrderController {
    orderService;
    constructor(orderService) {
        this.orderService = orderService;
        this.list = this.list.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.checkout = this.checkout.bind(this);
        this.findComplex = this.findComplex.bind(this);
    }
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const result = await this.orderService.list({
            page,
            limit
        });
        successResponse(res, "Orders berhasil diambil", result.orders, {
            page: result.currentPage,
            limit,
            total: result.total,
            totalPages: result.totalPages
        });
    }
    async getById(req, res) {
        const order = await this.orderService.getById(req.params.id);
        successResponse(res, "Order ditemukan", order);
    }
    async create(req, res) {
        const userId = req.user.id;
        const order = await this.orderService.createOrders({
            userId,
        });
        successResponse(res, "Order berhasil dibuat", order, null, 201);
    }
    async update(req, res) {
        const order = await this.orderService.update(req.params.id, req.body);
        successResponse(res, "Order berhasil diperbarui", order);
    }
    async remove(req, res) {
        const order = await this.orderService.delete(req.params.id);
        successResponse(res, "Order berhasil dihapus", order);
    }
    async checkout(req, res) {
        const order = await this.orderService.checkout(req.params.id);
        successResponse(res, "Checkout berhasil", order);
    }
    async findComplex(req, res) {
        const { userId, minTotal } = req.query;
        if (!userId || !minTotal) {
            throw new Error("User id dan minTotal wajid diisi");
        }
        const orders = await this.orderService.findComplex(String(userId), Number(minTotal));
        successResponse(res, "Order kompleks berhasil diambil", orders);
    }
}
//# sourceMappingURL=order.controller.js.map
