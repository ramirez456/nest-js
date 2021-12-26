import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get('')
    getProductFilter(){
        return `Orders`;
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        }
    }
}
