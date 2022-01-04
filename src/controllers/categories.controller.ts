import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesServices: CategoriesService){}

    @Get('')
    getCategories(
        @Query('limit') limit: number,
        @Query('offset') offset: number
    ){
        return this.categoriesServices.findAll();
    }
    
    @Get(':id')
    getCategoryById(@Param('id', ParseIntPipe) id: number){
        return this.categoriesServices.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateCategoryDto){
        return this.categoriesServices.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto){
        return this.categoriesServices.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriesServices.delete(id);
    }
}
