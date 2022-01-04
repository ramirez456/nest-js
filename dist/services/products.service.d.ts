import { Product } from '../entities/product.entity';
import { UpdateProductDto } from './../dtos/productos.dtos';
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: any): any;
    update(id: number, payload: UpdateProductDto): Product;
    delete(id: number): Product;
}
