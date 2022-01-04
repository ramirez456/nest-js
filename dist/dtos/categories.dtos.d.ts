export declare class CreateCategoryDto {
    readonly name: string;
    readonly description: string;
}
declare const UpdateCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
}
export {};
