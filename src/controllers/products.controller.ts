import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import {ProductsService} from './../services/products.service'
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

    @Get('/filter')
    getProductFilter(){
        return `Filter de productos`;
    }

    @Get('/:productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Res() response: Response, @Param('productId') productId: number){
       return this.productService.findOne(productId)
    }

    @Post()
    create(@Body() payload: any){
        // return {
        //     message: 'accion de crear',
        //     payload
        // }
        return this.productService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any){
        return {
            message: 'accion de actualizar',
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return {
            id,
            message: `accion de eliminarel producto ${id}`
        }
    }


}
