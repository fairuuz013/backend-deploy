import { successResponse } from "../utils/response.js";
import {} from "../services/product.services.js";
export class productController {
    productService;
    constructor(productService) {
        this.productService = productService;
        this.list = this.list.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.getStats = this.getStats.bind(this);
    }
    // 1
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search;
        const sortBy = req.query.sortBy;
        const sortOrder = req.query.sortOrder || "desc";
        const result = await this.productService.list({
            page,
            limit,
            search,
            sortBy,
            sortOrder
        });
        const pagination = {
            page: result.currentPage,
            limit,
            total: result.total,
            totalPages: result.totalPages,
        };
        successResponse(res, "Produk berasil diambil", result.products, pagination);
    }
    //2
    async getById(req, res) {
        const product = await this.productService.getById(req.params.id);
        successResponse(res, "Product berhasil di ambil product", product, null, 200);
    }
    async create(req, res) {
        const file = req.file;
        if (!file)
            throw new Error(" image is required");
        const { name, description, price, stock, categoryId } = req.body;
        const imageUrl = `/public/uploads/${file.filename}`;
        const data = {
            name: String(name),
            description: String(description),
            price: Number(price),
            stock: Number(stock),
            categoryId: Number(categoryId),
            ...(description && { description: description }),
            image: imageUrl,
        };
        const products = await this.productService.create(data);
        successResponse(res, "Produk berasil di tambah", products, null, 201);
    }
    //5
    async update(req, res) {
        const product = await this.productService.update(req.params.id, req.body);
        successResponse(res, "product berasil di update", product, null, 200);
    }
    //6
    async remove(req, res) {
        const deleted = await this.productService.delete(req.params.id);
        successResponse(res, "Produk berhasil dihapus", deleted, null, 200);
    }
    async getStats(_req, res) {
        const stats = await this.productService.exec();
        successResponse(res, "Stastistik product berhasil diambil", stats, null, 200);
    }
}
//# sourceMappingURL=product.controller.js.map
