import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
    private counterId = 1;
    private categories: Category[] = [{
        id:1,
        name: "calzado",
        description: "calzado sport of the brand"
    }];

    findAll(){
        return this.categories;
    }

    findOne(id: number){
        const category = this.categories.find((item)=> item.id == id);
        if(!category){
            throw new NotFoundException(`Category #${id} not found`);
        }
        return category;
    }
    
    create(payload: any){
        this.counterId++;
        const newCategory = {
            id: this.counterId,
            ...payload
        }
        this.categories.push(newCategory);
        return newCategory;
    }

    update(id: number, payload: UpdateCategoryDto){
        const category =  this.findOne(id);
        if(category){
            const index =  this.categories.findIndex((item) => item.id== id);
            this.categories[index] = {
                ...category,
                ...payload
            };
            return this.categories[index];
        }
        return null;
    }

    delete(id){
        const category = this.findOne(id);
        if(category){
            const index = this.categories.findIndex((item)=> item.id == id);
            this.categories.splice(index,1);
            return category;
        }
        throw new NotFoundException(`Category #${id} not found`);
    }
}
