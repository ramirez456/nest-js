import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { DocumentType } from 'src/entities/user.entity';

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    readonly last_name: string;
    @IsString()
    @IsNotEmpty()
    readonly document_type: DocumentType;
    @IsString()
    @IsNotEmpty()
    readonly document_number: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto){}