"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const categories_dtos_1 = require("../../dtos/categories.dtos");
const category_entity_1 = require("../../entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor() {
        this.counterId = 1;
        this.categories = [{
                id: 1,
                name: "calzado",
                description: "calzado sport of the brand"
            }];
    }
    findAll() {
        return this.categories;
    }
    findOne(id) {
        const category = this.categories.find((item) => item.id == id);
        if (!category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return category;
    }
    create(payload) {
        this.counterId++;
        const newCategory = Object.assign({ id: this.counterId }, payload);
        this.categories.push(newCategory);
        return newCategory;
    }
    update(id, payload) {
        const category = this.findOne(id);
        if (category) {
            const index = this.categories.findIndex((item) => item.id == id);
            this.categories[index] = Object.assign(Object.assign({}, category), payload);
            return this.categories[index];
        }
        return null;
    }
    delete(id) {
        const category = this.findOne(id);
        if (category) {
            const index = this.categories.findIndex((item) => item.id == id);
            this.categories.splice(index, 1);
            return category;
        }
        throw new common_1.NotFoundException(`Category #${id} not found`);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map