export class User{
    id: number;
    name: string;
    last_name: string;
    document_type: DocumentType;
    document_number: string;
}

export enum DocumentType{
    Dni,
    Pasaporte
}