"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const brands_dtos_1 = require("../../dtos/brands.dtos");
let BrandsService = class BrandsService {
    constructor() {
        this.counterId = 1;
        this.brands = [
            {
                id: 1,
                name: "calimod",
                description: "Brand one"
            }
        ];
    }
    findAll() {
        return this.brands;
    }
    findOne(id) {
        let brand = this.brands.find((item) => item.id == id);
        if (!brand) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return brand;
    }
    create(payload) {
        this.counterId++;
        const newBrand = Object.assign({ id: this.counterId }, payload);
        this.brands.push(newBrand);
        return newBrand;
    }
    update(id, payload) {
        const brand = this.findOne(id);
        if (brand) {
            const index = this.brands.findIndex((item) => item.id == id);
            this.brands[index] = Object.assign(Object.assign({}, brand), payload);
            return this.brands[index];
        }
        return null;
    }
    delete(id) {
        const brand = this.findOne(id);
        if (brand) {
            const index = this.brands.findIndex((item) => item.id == id);
            this.brands.splice(index, 1);
            return brand;
        }
        throw new common_1.NotFoundException(`Brand #${id} not found`);
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map