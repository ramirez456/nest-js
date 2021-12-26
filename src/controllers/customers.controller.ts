import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get('')
    getProductFilter(){
        return `Customers`;
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        }
    }
}
