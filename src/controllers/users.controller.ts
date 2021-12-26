import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('')
    getProductFilter(){
        return `Users`;
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: 'accion de crear',
            payload
        }
    }
}
