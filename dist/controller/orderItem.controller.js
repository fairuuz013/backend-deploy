import { successResponse } from "../utils/response.js";
export class OrderItemController {
    orderItemService;
    constructor(orderItemService) {
        this.orderItemService = orderItemService;
    }
    // 1 - LIST
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search;
        const sortBy = req.query.sortBy;
        const sortOrder = req.query.sortOrder || "desc";
        const result = await this.orderItemService.list({
            page,
            limit,
            search,
            sortBy,
            sortOrder,
        });
        successResponse(res, "Order items berhasil diambil", result.items, {
            page: result.currentPage,
            limit,
            total: result.total,
            totalPages: result.totalPages,
        });
    }
    // 2 - GET BY ID
    async getById(req, res) {
        const item = await this.orderItemService.getById(req.params.id);
        successResponse(res, "Order item ditemukan", item);
    }
    // 3 - CREATE
    async create(req, res) {
        const item = await this.orderItemService.create(req.body);
        successResponse(res, "Order item berhasil dibuat", item, null, 201);
    }
    // 4 - UPDATE
    async update(req, res) {
        const item = await this.orderItemService.update(req.params.id, req.body);
        successResponse(res, "Order item berhasil diupdate", item);
    }
    // 5 - DELETE
    async remove(req, res) {
        const item = await this.orderItemService.delete(req.params.id);
        successResponse(res, "Order item berhasil dihapus", item);
    }
}
//# sourceMappingURL=orderItem.controller.js.map
