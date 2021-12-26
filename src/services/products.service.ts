import { Injectable } from '@nestjs/common';
import {Product} from '../entities/product.entity'
@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [{
        id: 1,
        name: "product 1",
        description: "bla bla bla",
        price: 122,
        stock: 122,
        image: "ruta_image"
    }];

    findAll(){
        return this.products;
    }

    findOne(id:number){
        return this.products.find((item)=> item.id === id);
    }

    create(payload: any){
        this.counterId++;
        const newProduct = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex((item)=> item.id===id);
            this.products[index] =  payload;
            return this.products[index];
        }
        return null;
    }
}