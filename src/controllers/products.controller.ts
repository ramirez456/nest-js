import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import {ProductsService} from './../services/products.service'
import {ParseIntPipe} from './../common/parse-int.pipe';
import {CreateProductDto, UpdateProductDto} from './../dtos/productos.dtos'
@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService){

    }

    @Get('')
    getProducts(
        @Query('limit') limit: number = 100,
        @Query('offset') offset: number = 0,
        @Query('brand') brand: string
    ){
        return this.productService.findAll();
    }

    @Get('/:productId')
    getOne(@Param('productId', ParseIntPipe) productId: number){
        return this.productService.findOne(productId);
    }

    @Post()
    create(@Body() payload: CreateProductDto){
        return this.productService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto){
        return this.productService.update(id, payload)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return {
            id,
            message: `accion de eliminarel producto ${id}`
        }
    }


}
