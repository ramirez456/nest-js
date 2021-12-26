import { Response } from 'express';
import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): string;
    getOne(response: Response, productId: number): import("../entities/product.entity").Product;
    create(payload: any): any;
    update(id: number, payload: any): {
        message: string;
        id: number;
        payload: any;
    };
    delete(id: number): {
        id: number;
        message: string;
    };
}
