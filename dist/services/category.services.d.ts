import type { Prisma, Category } from "../generated";
import type { ICategoryRepository } from "../repository/category.repository.js";
interface FindAllParams {
    page: number;
    limit: number;
    search?: {
        name?: string;
    };
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface CategoryListResponse {
    categories: Category[];
    total: number;
    totalPages: number;
    currentPage: number;
}
export interface ICategoryService {
    list(params: FindAllParams): Promise<CategoryListResponse>;
    getById(id: string): Promise<Category>;
    create(data: Prisma.CategoryCreateInput): Promise<Category>;
    update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(id: string): Promise<Category>;
    findComplex(name: string, maxProductPrice: number): Promise<Category[]>;
}
export declare class CategoryServices implements ICategoryService {
    private categoryRepo;
    constructor(categoryRepo: ICategoryRepository);
    list(params: FindAllParams): Promise<CategoryListResponse>;
    getById(id: string): Promise<Category>;
    create(data: Prisma.CategoryCreateInput): Promise<Category>;
    update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(id: string): Promise<Category>;
    findComplex(name: string, maxProductPrice: number): Promise<Category[]>;
}
export {};
//# sourceMappingURL=category.services.d.ts.map
