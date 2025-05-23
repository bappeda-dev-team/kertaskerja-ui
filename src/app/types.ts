export interface Book {
    id: number | undefined;
    kodeOpd: string;
    namaOpd: string;
    isbn: string;
    title: string;
    author: string;
    price: number;
    publisher: string | undefined;
}

export interface Opd {
    id: number | undefined;
    kodeOpd: string;
    namaOpd: string;
}

export interface Order {
    id: number;
    bookIsbn: string;
    bookName: string;
    bookPrice: number;
    quantity: number;
    status: OrderStatus;
}

export enum OrderStatus {
    ACCEPTED = 'Accepted',
    REJECTED = 'Rejected',
    DISPATCHED = 'Dispatched'
}

export interface OrderRequest {
    isbn: string;
    quantity: number;
}

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    roles: string[];
}
