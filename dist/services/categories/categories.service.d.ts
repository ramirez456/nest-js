import { UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/category.entity';
export declare class CategoriesService {
    private counterId;
    private categories;
    findAll(): Category[];
    findOne(id: number): Category;
    create(payload: any): any;
    update(id: number, payload: UpdateCategoryDto): Category;
    delete(id: any): Category;
}
