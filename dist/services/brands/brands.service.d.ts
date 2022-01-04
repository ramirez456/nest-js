import { UpdateBrandDto } from 'src/dtos/brands.dtos';
import { Brand } from '../../entities/brand.entity';
export declare class BrandsService {
    private counterId;
    private brands;
    findAll(): Brand[];
    findOne(id: number): Brand;
    create(payload: any): any;
    update(id: any, payload: UpdateBrandDto): Brand;
    delete(id: number): Brand;
}
