import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBrandDto } from 'src/dtos/brands.dtos';
import {Brand} from '../../entities/brand.entity'

@Injectable()
export class BrandsService {
    private counterId =1;
    private brands: Brand[] = [
        {
            id: 1,
            name: "calimod",
            description: "Brand one"
        }
    ];
    
    findAll(){
        return this.brands;
    }

    findOne(id: number){
        let brand = this.brands.find((item)=> item.id == id);
        if(!brand){
            throw new NotFoundException(`Brand #${id} not found`);
        }
        return brand;
    }

    create(payload: any){
        this.counterId++;
        const newBrand = {
            id: this.counterId,
            ...payload
        }
        this.brands.push(newBrand);
        return newBrand;
    }

    update(id, payload: UpdateBrandDto){
        const brand = this.findOne(id);
        if(brand){
            const index = this.brands.findIndex((item)=>item.id == id);
            this.brands[index] = {
                ...brand,
                ...payload
            };
            return this.brands[index];
        }
        return null;
    }

    delete(id: number){
        const brand =  this.findOne(id);
        if(brand){
            const index = this.brands.findIndex((item)=> item.id== id);
            this.brands.splice(index,1);
            return brand;
        }
        throw new NotFoundException(`Brand #${id} not found`);
    }
}
