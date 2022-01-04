import { Injectable, NotFoundException } from '@nestjs/common';
import {Product} from '../../entities/product.entity';
import {UpdateProductDto} from '../../dtos/productos.dtos'
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

    findOne(id: number) {
        //first error = parar la ejecución si es que tenemos un error
        let product =  this.products.find((item) => item.id == id);
        if(!product){
            throw new NotFoundException(`product #${id} not found`);
        }
        return product;

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

    update(id: number, payload:UpdateProductDto){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex((item)=> item.id==id);
            this.products[index] =  {
                ...product,
                ...payload
                };
            return this.products[index];
        }
        return null;
    }

    delete(id: number){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex((item) =>item.id == id);
            this.products.splice(index,1);
            return product;
        }
        throw new NotFoundException(`Product #${id} not found`)
    }
}
