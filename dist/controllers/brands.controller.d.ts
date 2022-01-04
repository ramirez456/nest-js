import { BrandsService } from './../services/brands/brands.service';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    getBrands(limit: number, offset: number, brand: string): import("../entities/brand.entity").Brand[];
    getOne(brandId: number): import("../entities/brand.entity").Brand;
    create(payload: CreateBrandDto): any;
    update(id: number, payload: UpdateBrandDto): import("../entities/brand.entity").Brand;
    delete(id: number): import("../entities/brand.entity").Brand;
}
