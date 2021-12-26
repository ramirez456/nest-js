import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get('')
    getProductFilter(){
        return `brands`;
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        }
    }
}
