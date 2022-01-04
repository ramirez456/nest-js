export declare class User {
    id: number;
    name: string;
    last_name: string;
    document_type: DocumentType;
    document_number: string;
}
export declare enum DocumentType {
    Dni = 0,
    Pasaporte = 1
}
