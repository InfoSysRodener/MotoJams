export interface Product {
    id:number;
    name:string;
    description:string;
    brand:string;
    price:number;
    image:string;
    images:Array<string>;
    quantity:number;
}

export interface Products {
    [ key: number ] : Product;
}