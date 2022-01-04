import { DocumentType } from 'src/entities/user.entity';
export declare class CreateUserDto {
    readonly name: string;
    readonly last_name: string;
    readonly document_type: DocumentType;
    readonly document_number: string;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
