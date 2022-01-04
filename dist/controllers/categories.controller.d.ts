import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';
export declare class CategoriesController {
    private categoriesServices;
    constructor(categoriesServices: CategoriesService);
    getCategories(limit: number, offset: number): import("../entities/category.entity").Category[];
    getCategoryById(id: number): import("../entities/category.entity").Category;
    create(payload: CreateCategoryDto): any;
    update(id: number, payload: UpdateCategoryDto): import("../entities/category.entity").Category;
    delete(id: number): import("../entities/category.entity").Category;
}
