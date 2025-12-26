import { successResponse } from "../utils/response.js";
export class CategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.list = this.list.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.findComplex = this.findComplex.bind(this);
    }
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const result = await this.categoryService.list({ page, limit });
        successResponse(res, "Categories berhasil diambil", result.categories, {
            page: result.currentPage,
            limit,
            total: result.total,
            totalPages: result.totalPages,
        });
    }
    async getById(req, res) {
        const category = await this.categoryService.getById(req.params.id);
        successResponse(res, "Category ditemukan", category);
    }
    async create(req, res) {
        const category = await this.categoryService.create(req.body);
        successResponse(res, "Category berhasil dibuat", category, null, 201);
    }
    async update(req, res) {
        const category = await this.categoryService.update(req.params.id, req.body);
        successResponse(res, "Category berhasil diperbarui", category);
    }
    async remove(req, res) {
        const category = await this.categoryService.delete(req.params.id);
        successResponse(res, "Category berhasil dihapus", category);
    }
    async findComplex(req, res) {
        const name = String(req.query.name || "");
        const maxPrice = Number(req.query.maxPrice || 0);
        const categories = await this.categoryService.findComplex(name, maxPrice);
        successResponse(res, "Categories kompleks berhasil diambil", categories);
    }
}
//# sourceMappingURL=category.controller.js.map
