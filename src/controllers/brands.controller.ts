import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BrandsService } from './../services/brands/brands.service'
import {ParseIntPipe} from './../common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
@Controller('brands')
export class BrandsController {

    constructor(private brandsService: BrandsService){}

    @Get('')
    getBrands(
        @Query('limit') limit: number,
        @Query('offset') offset: number,
        @Query('brand') brand: string
    ){
        return this.brandsService.findAll();
    }

    @Get('/:brandId')
    getOne(@Param('brandId', ParseIntPipe) brandId: number){
        return this.brandsService.findOne(brandId);
    }

    @Post()
    create(@Body() payload: CreateBrandDto){
        return this.brandsService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto){
        return this.brandsService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.brandsService.delete(id);
    }

}
