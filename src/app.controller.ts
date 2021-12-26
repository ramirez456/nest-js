import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('products')
  // getProducts(@Query() params: any){
  //   const { limit, offset } =  params; 
  //   return `Lista de productos limit =>${limit} and productucs =>${offset}`;
  // } 
  //rutas statics al inicio y las rutas dinamicas al final  
}
